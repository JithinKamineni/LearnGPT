# core/pdf_generator.py
from fpdf import FPDF
import io

def create_pdf_from_text(text):
    pdf = FPDF()
    pdf.add_page()
    # Add a font that supports a wide range of characters.
    # This line looks for the .ttf file in the parent directory (the 'backend' folder).
    try:
        pdf.add_font('DejaVu', '', 'DejaVuSans.ttf', uni=True)
        pdf.set_font('DejaVu', '', 12)
    except RuntimeError:
        # Fallback to a basic font if DejaVu is not found
        print("WARNING: DejaVuSans.ttf not found. Falling back to Arial. Special characters may not render correctly.")
        pdf.set_font('Arial', '', 12)

    # Add the text to the PDF
    pdf.multi_cell(0, 10, text)

    # THIS IS THE CORRECTED LINE:
    # Generate the PDF in memory. The .output() method directly gives us the bytes we need.
    pdf_bytes = pdf.output()

    return io.BytesIO(pdf_bytes)