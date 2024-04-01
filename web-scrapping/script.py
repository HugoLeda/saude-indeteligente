from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from time import sleep
import pyautogui

options = Options()
# options.add_argument('--headless')
options.add_argument('window-size=400,800')

navegador = webdriver.Chrome(options=options)

for i in range(3000):
  navegador.get('https://docs.google.com/forms/d/e/1FAIpQLScsO5sT2T345yQwh_NVlPXXgc_ZSWPNr2hmUdcdehbsVcCx3g/viewform')

  #print(pyautogui.position())
  pyautogui.moveTo(83, 844)
  pyautogui.click()
  sleep(0.1)
  #print(pyautogui.position())

  pyautogui.moveTo(95, 974)
  pyautogui.click()