from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from time import sleep
import pandas as pd
import csv
import linksList

def getLinks():
  link_list = [['a', 6], ['b', 1], ['c', 7], ['d', 9], ['e', 4], ['f', 2], ['g', 1], ['h', 5], ['i', 1], ['j', 0], ['l', 1], ['m', 1], ['n', 0], ['o', 0], ['p', 2], ['q', 0], ['r', 0], ['s', 5], ['t', 3], ['u', 0], ['v', 0], ['z', 0]]

  lista_links = []

  options = Options()
  options.add_argument('window-size=720,108 0')
  navegador = webdriver.Chrome(options=options)

  #navegador.get('https://www.einstein.br/doencas-sintomas?filtro=a#p=0')
  for link in link_list:    
    url = 'https://www.einstein.br/doencas-sintomas?filtro=' + link[0] + '#p=0'
    navegador.get(url)        

    for i in range(link[1]):
      page_content = navegador.page_source

      site = BeautifulSoup(page_content, 'html.parser')

      tags_a = site.find_all('a', attrs={'class': 'linkFinalTexto'})

      for tag in tags_a:
        lista_links.append(tag.get('href'))

      if (i <= link[1]):
        try:
          next_button = WebDriverWait(navegador, 2).until(EC.element_to_be_clickable((By.CLASS_NAME, 'next_link')))    
          next_button.click()
        except:
          navegador.execute_script("arguments[0].click();", next_button)
    
  #print(lista_links)
  navegador.quit()
  return lista_links
  

def export_to_excel(data, filename='links.xlsx'):  
  df = pd.DataFrame(data, columns=['Links'])  # Create DataFrame if data is not already one
  df.to_excel(filename, index=False)  # Export to Excel without index column

#getLinks()
#lista_links = getLinks()
#export_to_excel(lista_links)
  
def getSymptoms():   
  links = linksList.links    
  allSymptoms = []  
  for link in links:
    try:         
      options = Options()  
      options.add_argument('window-size=720,108 0')
      navegador = webdriver.Chrome(options=options)
          
      url = 'https://www.einstein.br' + link
      print(url)
      navegador.get(url)    
      sleep(0.5)  

      destaque_element = navegador.find_element(By.CLASS_NAME, 'Destaque')
      
      strong_elements = destaque_element.find_elements(By.TAG_NAME, 'strong')
      div_elements = destaque_element.find_elements(By.TAG_NAME, 'div')

      content = []
      titles = []  

      h1 = navegador.find_element(By.ID, 'TitleContent')  
      symptomName = h1.text + ':'  
      content.append(symptomName)
      
      for element in strong_elements:
        titles.append(element.text)    

      for element in div_elements:
        if (element.text != '' and element.text != ' '):
          content.append(element.text)

      allSymptoms.append(content)          
    except Exception as e:
      print(f"Erro ao processar o link: {link}")
      print(f"Erro: {e}") 
    finally:
      navegador.quit()           
    

  with open('symptoms.csv', 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)

    writer.writerow(['Symptoms'])

    for symptoms in allSymptoms:
      print(symptoms)
      writer.writerow(symptoms)

  with open('symptoms.txt', 'w', encoding='utf-8') as textfile:
    for symptoms in allSymptoms:
      textfile.write('\n'.join(symptoms) + '\n\n')

  print("Symptoms data exported to symptoms.txt")

getSymptoms()