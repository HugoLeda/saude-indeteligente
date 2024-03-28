from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
import time
import pyautogui as py
import csv

options = Options()
options.add_argument('window-size=720,1080')

driver = webdriver.Chrome()

driver.get("https://speedtest.net/pt")

try:
  init = WebDriverWait(driver, 2).until(EC.element_to_be_clickable((By.CLASS_NAME, 'js-start-test')))
  init.click()
  
  time.sleep(50)
  #Nome do Provedor
  net_provider = driver.find_element(By.CLASS_NAME, 'js-data-isp')
  print(net_provider.text)
  
  #Carregar Valor de Download
  down_speed = driver.find_element(By.CLASS_NAME, 'download-speed')
  print(down_speed.text)

  #Carregar Valor de Upload
  up_speed = driver.find_element(By.CLASS_NAME, 'upload-speed')
  print(up_speed.text)

  #Localização do Servidor
  server_loc = driver.find_element(By.CLASS_NAME, 'js-sponsor-name')
  print(server_loc.text)

  speed_test_date = datetime.now()
  get_date = speed_test_date.strftime("%y/%m/%d")
  print(get_date)
  get_hour = speed_test_date.strftime("%H:%M")
  print(get_hour)

except:
  driver.quit()
  print(":( failed")

with open('st-save.csv', 'a', newline='') as file:
  writer = csv.writer(file)
  writer.writerow([get_date, get_hour, net_provider.text, down_speed.text, up_speed.text, server_loc.text])