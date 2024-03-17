import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from time import sleep

requests.get('https://www.einstein.br/doencas-sintomas#p=0pi')

options = Options()
# options.add_argument('--headless')
options.add_argument('window-size=400,800')

navegador = webdriver.Chrome(options=options)

navegador.get('https://www.einstein.br/doencas-sintomas#p=0pi')

