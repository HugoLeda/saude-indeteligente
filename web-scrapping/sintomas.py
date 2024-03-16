import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from time import sleep

requests.get('https://www.einstein.br/doencas-sintomas#p=0pi')