# backend/app.py
import os
from flask import Flask, request, jsonify, send_file # <-- Make sure send_file is imported
from flask_cors import CORS
from werkzeug.utils import secure_filename
from core.simplifier import simplify_text
from core.text_extractor import extract_text_from_pdf, extract_text_from_docx
from core.pdf_generator import create_pdf_from_text # <-- Add this import

app = Flask(__name__)
CORS(app)

# ... (The rest of your existing code, like UPLOAD_FOLDER, allowed_file, etc., remains the same)
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'pdf', 'docx'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def home():
    return "Hello, World! The backend server is running."

@app.route('/api/simplify-file', methods=['POST'])
def api_simplify_file():
    # ... (This function is unchanged)
    if 'file' not in request.files: return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '': return jsonify({'error': 'No selected file'}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        try:
            extracted_text = ""
            if filename.lower().endswith('.pdf'):
                with open(file_path, 'rb') as f: extracted_text = extract_text_from_pdf(f)
            elif filename.lower().endswith('.docx'):
                with open(file_path, 'rb') as f: extracted_text = extract_text_from_docx(f)
            simplified_text = simplify_text(extracted_text)
            return jsonify({'simplified_text': simplified_text})
        except Exception as e:
            return jsonify({'error': f'An error occurred: {str(e)}'}), 500
        finally:
            if os.path.exists(file_path): os.remove(file_path)
    else:
        return jsonify({'error': 'File type not allowed'}), 400

@app.route('/api/simplify-text', methods=['POST'])
def api_simplify_text():
    # ... (This function is unchanged)
    data = request.get_json()
    if not data or 'text' not in data: return jsonify({'error': 'Missing text'}), 400
    original_text = data['text']
    simplified = simplify_text(original_text)
    return jsonify({'simplified_text': simplified})

# ADD THIS NEW ENDPOINT FOR PDF GENERATION
@app.route('/api/generate-pdf', methods=['POST'])
def api_generate_pdf():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'Missing "text" in request body'}), 400

    text_content = data['text']
    # This calls the function from our pdf_generator.py file
    pdf_stream = create_pdf_from_text(text_content)

    # Flask sends the file from memory back to the user
    return send_file(
        pdf_stream,
        as_attachment=True,
        download_name='simplified_document.pdf',
        mimetype='application/pdf'
    )

if __name__ == '__main__':
    app.run(debug=True)