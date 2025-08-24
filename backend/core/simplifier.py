import google.generativeai as genai
import config # Imports your config.py file

# Configure the Gemini API with the key from your config file
genai.configure(api_key=config.GEMINI_API_KEY)

# This is the prompt that instructs the AI. It's the most important part!
SYSTEM_PROMPT = """
You are an expert educator and AI assistant. Your task is to take the provided educational text and rephrase it into a simpler, more understandable form for a high school student. 

Follow these rules strictly:
1.  **Do NOT summarize.** Maintain the original length and level of detail. Your goal is simplification, not summarization.
2.  **Simplify Vocabulary:** Replace complex, academic, and technical jargon with everyday words.
3.  **Use Analogies:** Where appropriate, use simple analogies and real-world examples to explain complex concepts.
4.  **Break Down Sentences:** Reformat long, complex sentences into shorter, clearer ones.
5.  **Maintain Core Meaning:** The simplified text must be factually accurate and retain the core concepts and information of the original text.
"""

# Function to call the Gemini API
def simplify_text(text):
    try:
        model = genai.GenerativeModel(
            model_name="gemini-1.5-flash",
            system_instruction=SYSTEM_PROMPT
        )
        response = model.generate_content(text)
        return response.text
    except Exception as e:
        print(f"An error occurred: {e}")
        return "Error: Could not simplify the text."

# This block allows you to test this file directly
if __name__ == '__main__':
    sample_text = "The process of photosynthesis, which occurs in the chloroplasts of plant cells, involves the conversion of light energy into chemical energy, primarily in the form of glucose. This endergonic reaction utilizes carbon dioxide and water as substrates, catalyzed by various enzymes, and releases oxygen as a byproduct, which is crucial for aerobic respiration in most living organisms."
    simplified = simplify_text(sample_text)
    print("--- ORIGINAL ---")
    print(sample_text)
    print("\n--- SIMPLIFIED ---")
    print(simplified) 
