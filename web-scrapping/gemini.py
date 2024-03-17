# pip install google-generativeai
# pip install Pillow

import google.generativeai as genai

API_KEY = 'AIzaSyAGv-ezofSsUOep3xPUz_qPOVGJ9EL3CQM'

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-pro')

response = model.generate_content('A56.0 Infecc p/clamidias trato geniturinario infer - liste apenas os sintemas de forma escrita na resposta')

print(response.result['candidates'])
