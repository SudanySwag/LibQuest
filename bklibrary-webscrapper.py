import requests
import csv
from bs4 import BeautifulSoup

htmlFile = open("libraries_html.html")
page = htmlFile.read()

# URL = "https://www.bklynlibrary.org/locations"
# page = requests.get(URL)
soup = BeautifulSoup(page, "html.parser")

results = soup.find_all("li", role="menuitem")
data = [["Name", "Address"]]
for li in results:
    name = " ".join(li.find("h6").contents[0].split())
    addr = " ".join(li.contents[3].split())
    library = [name, addr]
    print(library)
    data.append(library)
#print(results[0].contents[])
print(data)

csv_file_path = 'bk_libraries.csv'

# Open the file in write mode
with open(csv_file_path, mode='w', newline='') as file:
    # Create a csv.writer object
    writer = csv.writer(file)
    # Write data to the CSV file
    writer.writerows(data)