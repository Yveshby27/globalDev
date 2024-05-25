const softwareDeveloperSalaries = [
  {
    name: "United States",
    average_salary: 105000,
    description: "With an average salary of $105,000, the United States offers lucrative opportunities for employers to attract top-tier software developers in a diverse and dynamic tech industry.",
    zone: 'America/New_York',
    std: -5
  },
  {
    name: "United Kingdom",
    average_salary: 75000,
    description: "The United Kingdom provides employers with access to a pool of skilled software developers who command an average salary of $75,000, coupled with a vibrant tech ecosystem and cultural diversity.",
    zone: 'Europe/London',
    std: 0
  },
  {
    name: "Canada",
    average_salary: 85000,
    description: "Offering an average salary of $85,000, Canada provides employers with competitive compensation packages to attract and retain talented software developers in a thriving tech ecosystem.",
    zone: "America/Toronto",
    std: -5
  },
  {
    name: "Germany",
    average_salary: 70000,
    description: "With an average salary of $70,000, Germany offers employers the opportunity to invest in software developer roles with solid remuneration within a renowned engineering landscape, reflecting the country's commitment to technological excellence.",
    zone: "Europe/Berlin",
    std: 1
  },
  {
    name: "Australia",
    average_salary: 90000,
    description: "Australia provides employers with the chance to tap into a pool of skilled software developers who enjoy an average salary of $90,000, reflecting the country's robust tech sector and high standard of living.",
    zone: 'Australia/Sydney',
    std: 10
  },
  {
    name: "India",
    average_salary: 50000,
    description: "Despite a comparatively lower average salary of $50,000, India offers employers the advantage of a cost-effective living environment and abundant opportunities for career growth, making it a strategic location for building software development teams.",
    zone: 'Asia/Kolkata',
    std: 5.5
  },
  {
    name: "Japan",
    average_salary: 90000,
    description: "With an average salary of $90,000, Japan provides employers with the opportunity to engage software developers in a blend of traditional culture and cutting-edge technology, fostering an environment that attracts top tech talent.",
    zone: 'Asia/Tokyo',
    std: 9
  },
  {
    name: "Sweden",
    average_salary: 80000,
    description: "Sweden offers employers the chance to recruit software developers with an average salary of $80,000, along with a high quality of life, innovative work environments, and a strong emphasis on work-life balance.",
    zone: 'Europe/Stockholm',
    std: 1
  },
  {
    name: "Netherlands",
    average_salary: 85000,
    description: "The Netherlands provides employers with access to software developers commanding an average salary of $85,000, coupled with a vibrant tech scene, excellent infrastructure, and a high standard of living.",
    zone: 'Europe/Amsterdam',
    std: 1
  },
  {
    name: "Singapore",
    average_salary: 95000,
    description: "With an average salary of $95,000, Singapore offers employers opportunities to recruit software developers in a global business hub known for its innovation, efficiency, and multicultural environment.",
    zone: 'Asia/Singapore',
    std: 8
  },
  {
    name: "Switzerland",
    average_salary: 110000,
    description: "Switzerland boasts an average salary of $110,000 for software developers, providing employers with access to top-tier talent in a country known for breathtaking landscapes, political stability, and a thriving tech sector.",
    zone: 'Europe/Zurich',
    std: 1
  },
  {
    name: "Norway",
    average_salary: 90000,
    description: "Norway offers employers the chance to hire software developers with an average salary of $90,000, combined with a high standard of living, beautiful natural surroundings, and a strong focus on work-life balance.",
    zone: 'Europe/Oslo',
    std: 1
  },
  {
    name: "Denmark",
    average_salary: 85000,
    description: "With an average salary of $85,000, Denmark provides employers with opportunities to engage software developers in a progressive and innovative tech industry, alongside a high quality of life and strong social welfare.",
    zone: 'Europe/Copenhagen',
    std: 1
  },
  {
    name: "Finland",
    average_salary: 80000,
    description: "Finland offers employers the opportunity to recruit software developers enjoying an average salary of $80,000, along with access to cutting-edge technologies, a vibrant startup ecosystem, and a high level of education.",
    zone: 'Europe/Helsinki',
    std: 2
  },
  {
    name: "France",
    average_salary: 75000,
    description: "France provides employers with access to software developers commanding an average salary of $75,000, combined with a rich cultural heritage, diverse work opportunities, and a thriving tech scene in cities like Paris.",
    zone: 'Europe/Paris',
    std: 1
  },
  {
    name: "Italy",
    average_salary: 60000,
    description: "With an average salary of $60,000, Italy offers employers the chance to recruit software developers in a country renowned for its art, history, and culinary delights, alongside a growing tech sector.",
    zone: 'Europe/Rome',
    std: 1
  },
  {
    name: "Spain",
    average_salary: 65000,
    description: "Spain offers employers the opportunity to engage software developers with an average salary of $65,000, along with a warm climate, vibrant culture, and a burgeoning tech industry in cities like Barcelona and Madrid.",
    zone: 'Europe/Madrid',
    std: 1
  },
  {
    name: "South Korea",
    average_salary: 80000,
    description: "With an average salary of $80,000, South Korea provides employers with opportunities to recruit software developers in a technologically advanced society known for its innovation, fast internet, and bustling cities.",
    zone: 'Asia/Seoul',
    std: 9
  },
  {
    name: "Brazil",
    average_salary: 45000,
    description: "Brazil offers employers access to software developers commanding an average salary of $45,000, combined with a rich cultural heritage, beautiful landscapes, and a growing tech sector centered around cities like São Paulo and Rio de Janeiro.",
    zone: 'America/Sao_Paulo',
    std: -3
  },
  {
    name: "Mexico",
    average_salary: 55000,
    description: "With an average salary of $55,000, Mexico provides employers with opportunities to recruit software developers in a country known for its vibrant culture, delicious cuisine, and emerging tech industry.",
    zone: 'America/Mexico_City',
    std: -6
  },
  {
    name: "Turkey",
    average_salary: 50000,
    description: "Turkey offers a blend of cultural heritage and modern technology, providing employers access to software developers with an average salary of $50,000 in a rapidly developing tech industry.",
    zone: 'Europe/Istanbul',
    std: 3
  },
  {
    name: "China",
    average_salary: 75000,
    description: "With an average salary of $75,000, China presents a dynamic market for software developers, combining rapid technological advancements with a vast talent pool.",
    zone: 'Asia/Shanghai',
    std: 8
  },
  {
    name: "Taiwan",
    average_salary: 70000,
    description: "Taiwan offers employers the opportunity to hire software developers at an average salary of $70,000, within a thriving tech hub known for its innovation and semiconductor industry.",
    zone: 'Asia/Taipei',
    std: 8
  },
  {
    name: "Portugal",
    average_salary: 60000,
    description: "With an average salary of $60,000, Portugal provides employers with access to software developers in a tech ecosystem that benefits from a high quality of life and a vibrant startup scene.",
    zone: 'Europe/Lisbon',
    std: 0
  },
  {
    name: "Poland",
    average_salary: 55000,
    description: "Poland offers employers competitive salaries for software developers at an average of $55,000, in a growing tech sector supported by a strong educational system and a skilled workforce.",
    zone: 'Europe/Warsaw',
    std: 1
  },
  {
    name: "Ecuador",
    average_salary: 40000,
    description: "Ecuador provides employers with the opportunity to hire software developers at an average salary of $40,000, in a developing tech industry with cost-effective living conditions.",
    zone: 'America/Guayaquil',
    std: -5
  },
  {
    name: "Libya",
    average_salary: 30000,
    description: "Libya offers a developing tech sector with an average salary of $30,000 for software developers, presenting opportunities in a region seeking to expand its technological capabilities.",
    zone: 'Africa/Tripoli',
    std: 2
  },
  {
    name: "New Zealand",
    average_salary: 85000,
    description: "With an average salary of $85,000, New Zealand provides employers with access to a skilled workforce of software developers in a country renowned for its natural beauty and high quality of life.",
    zone: 'Pacific/Auckland',
    std: 12
  },
  {
    name: "Israel",
    average_salary: 72000,
    description: "Israel is known for its thriving tech industry, often referred to as the 'Startup Nation'. It offers a high average salary for software developers, making it an attractive destination for tech talent.",
    zone: 'Asia/Jerusalem',
    std: 2
  },
  {
    name: "Jamaica",
    average_salary: 25000,
    description: "Jamaica has a growing tech sector with a focus on outsourcing services. While the average salary for software developers is relatively low, the cost of living is also lower compared to many Western countries.",
    zone: 'America/Jamaica',
    std: -5
  },
  {
    name: "Iran",
    average_salary: 15000,
    description: "Iran's tech industry is emerging with a focus on local startups and software development. Despite economic challenges, there is a pool of skilled developers.",
    zone: 'Asia/Tehran',
    std: 3.5
  },
  {
    name: "Ukraine",
    average_salary: 25000,
    description: "Ukraine is a major hub for IT outsourcing in Europe. It offers competitive salaries for software developers and has a strong talent pool in the tech industry.",
    zone: 'Europe/Kyiv',
    std: 2
  },
  {
    name: "Croatia",
    average_salary: 32000,
    description: "Croatia's tech industry is growing, with a focus on software development and IT services. It offers a moderate average salary for developers and a pleasant living environment.",
    zone: 'Europe/Belgrade',
    std: 1
  },
  {
    name: "Russia",
    average_salary: 30000,
    description: "Russia has a large and skilled pool of software developers. The tech industry is significant, with many developers working in both local and international companies.",
    zone: 'Europe/Volgograd',
    std: 3
  },
  {
    name: "Lithuania",
    average_salary: 35000,
    description: "Lithuania is a growing tech hub in the Baltic region. It offers competitive salaries for software developers and has a strong focus on IT innovation and startups.",
    zone: 'Europe/Vilnius',
    std: 2
  },
  {
    name: "Austria",
    average_salary: 65000,
    description: "Austria has a well-developed tech industry with a high demand for software developers. It offers attractive salaries and a high quality of life.",
    zone: 'Europe/Vienna',
    std: 1
  },
  {
    name: "Liechtenstein",
    average_salary: 80000,
    description: "Liechtenstein, though small, has a strong economy and offers high salaries for software developers. It is known for its banking and financial services sector.",
    zone: 'Europe/Vaduz',
    std: 1
  },
  {
    name: "Moldova",
    average_salary: 20000,
    description: "Moldova is an emerging tech destination with a growing number of IT companies. It offers lower salaries compared to Western Europe but has a lower cost of living.",
    zone: 'Europe/Tiraspol',
    std: 2
  },
  {
    name: "Albania",
    average_salary: 25000,
    description: "Albania's tech industry is developing, with increasing opportunities in software development. The average salary is modest, reflecting the country's overall economic status.",
    zone: 'Europe/Tirane',
    std: 1
  },
  {
    name: "Estonia",
    average_salary: 45000,
    description: "Estonia is a leader in digital innovation and e-governance. It offers competitive salaries for software developers and a supportive environment for tech startups.",
    zone: 'Europe/Tallinn',
    std: 2
  },
  {
    name: "Bulgaria",
    average_salary: 30000,
    description: "Bulgaria has a growing IT sector with many opportunities for software developers. It offers competitive salaries within the region and a low cost of living.",
    zone: 'Europe/Sofia',
    std: 2
  },
  {
    name: "North Macedonia",
    average_salary: 20000,
    description: "North Macedonia's tech industry is in the early stages of development, offering modest salaries for software developers. The cost of living is relatively low.",
    zone: 'Europe/Skopje',
    std: 1
  },
  {
    name: "Bosnia and Herzegovina",
    average_salary: 20000,
    description: "Bosnia and Herzegovina has a developing tech sector with increasing opportunities in software development. Salaries are modest but reflect the local economic conditions.",
    zone: 'Europe/Sarajevo',
    std: 1
  },
  {
    name: "Latvia",
    average_salary: 35000,
    description: "Latvia is part of the Baltic tech hub, offering competitive salaries for software developers and a growing ecosystem of startups and IT companies.",
    zone: 'Europe/Riga',
    std: 2
  },
  {
    name: "Czech Republic",
    average_salary: 45000,
    description: "The Czech Republic has a vibrant tech industry with a strong demand for software developers. It offers competitive salaries and a high quality of life.",
    zone: 'Europe/Prague',
    std: 1
  },
  {
    name: "Montenegro",
    average_salary: 25000,
    description: "Montenegro's tech sector is small but growing. It offers moderate salaries for software developers and a scenic, Mediterranean environment.",
    zone: 'Europe/Podgorica',
    std: 1
  },
  {
    name: "Cyprus",
    average_salary: 35000,
    description: "Cyprus has a developing tech industry with a focus on IT services and software development. It offers a good quality of life and competitive salaries within the region.",
    zone: 'Europe/Nicosia',
    std: 2
  },
  {
    name: "Belarus",
    average_salary: 20000,
    description: "Belarus has a significant IT industry with many skilled software developers. Salaries are lower compared to Western Europe but reflect the local cost of living.",
    zone: 'Europe/Minsk',
    std: 3
  },
  {
    name: "Malta",
    average_salary: 40000,
    description: "Malta's tech industry is growing, with a focus on gaming and fintech. It offers competitive salaries and a Mediterranean lifestyle.",
    zone: 'Europe/Malta',
    std: 1
  },
  {
    name: "Luxembourg",
    average_salary: 80000,
    description: "Luxembourg offers some of the highest salaries for software developers in Europe. It is known for its strong financial sector and high standard of living.",
    zone: 'Europe/Luxembourg',
    std: 1
  },
  {
    name: "Slovenia",
    average_salary: 40000,
    description: "Slovenia has a growing tech sector with competitive salaries for software developers. It offers a good quality of life and a strong focus on innovation.",
    zone: 'Europe/Ljubljana',
    std: 1
  },
  {
    name: "Ireland",
    average_salary: 70000,
    description: "Ireland is a major tech hub in Europe, home to many multinational tech companies. It offers high salaries for software developers and a vibrant tech ecosystem.",
    zone: 'Europe/Dublin',
    std: 1
  },
  {
    name: "Hungary",
    average_salary: 35000,
    description: "Hungary's tech industry is expanding, with increasing opportunities in software development. It offers competitive salaries within Central Europe.",
    zone: 'Europe/Budapest',
    std: 1
  },
  {
    name: "Romania",
    average_salary: 30000,
    description: "Romania is a key destination for IT outsourcing in Europe. It offers competitive salaries for software developers and a growing tech industry.",
    zone: 'Europe/Bucharest',
    std: 2
  },
  {
    name: "Belgium",
    average_salary: 65000,
    description: "Belgium has a well-developed tech sector with high salaries for software developers. It offers a high quality of life and a strategic location in Europe.",
    zone: 'Europe/Brussels',
    std: 1
  },
  {
    name: "Slovakia",
    average_salary: 35000,
    description: "Slovakia's tech industry is growing, with a focus on IT services and software development. It offers competitive salaries within the region.",
    zone: 'Europe/Bratislava',
    std: 1
  },
  {
    name: "Greece",
    average_salary: 30000,
    description: "Greece has a developing tech sector with opportunities in software development. It offers a moderate average salary and a Mediterranean lifestyle.",
    zone: 'Europe/Athens',
    std: 2
  },
  {
    name: "Andorra",
    average_salary: 50000,
    description: "Andorra, while small, offers competitive salaries for software developers. It is known for its high standard of living and beautiful mountain scenery.",
    zone: 'Europe/Andorra',
    std: 1
  },
  {
    name: "Egypt",
    average_salary: 15000,
    description: "Egypt's tech industry is growing, with a focus on software development and IT services. Salaries are relatively low but are balanced by a lower cost of living.",
    zone: 'Africa/Cairo',
    std: 2
  },
  {
    name: "Cuba",
    average_salary: 10000,
    description: "Cuba's tech industry is limited and highly regulated, with lower average salaries for software developers. The country is slowly opening up to more technological advancements.",
    zone: 'America/Havana',
    std: -5
  },
  {
    name: "Chile",
    average_salary: 40000,
    description: "Chile has a burgeoning tech industry, particularly in Santiago, offering competitive salaries for software developers and a vibrant startup ecosystem.",
    zone: 'America/Santiago',
    std: -4
  },
  {
    name: "Laos",
    average_salary: 12000,
    description: "Laos' tech industry is still in its nascent stages, with limited opportunities and lower average salaries for software developers compared to its regional peers.",
    zone: 'Asia/Vientiane',
    std: 7
  },
  {
    name: "Armenia",
    average_salary: 15000,
    description: "Armenia is developing a growing IT sector, with increasing opportunities for software developers and a supportive environment for tech startups.",
    zone: 'Asia/Yerevan',
    std: 4
  },
  {
    name: "Mongolia",
    average_salary: 18000,
    description: "Mongolia's tech industry is emerging, focusing on software development and IT services. It offers moderate salaries for developers within the region.",
    zone: 'Asia/Ulaanbaatar',
    std: 8
  },
  {
    name: "Bhutan",
    average_salary: 15000,
    description: "Bhutan has a small but growing tech industry, with opportunities for software developers primarily in government and local enterprises.",
    zone: 'Asia/Thimphu',
    std: 6
  },
  {
    name: "Georgia",
    average_salary: 20000,
    description: "Georgia's tech sector is growing rapidly, attracting investments and offering competitive salaries for software developers within the region.",
    zone: 'Asia/Tbilisi',
    std: 4
  },
  {
    name: "Uzbekistan",
    average_salary: 15000,
    description: "Uzbekistan's tech industry is expanding, with increasing opportunities for software developers and a focus on digital transformation.",
    zone: 'Asia/Tashkent',
    std: 5
  },
  {
    name: "Vietnam",
    average_salary: 25000,
    description: "Vietnam has a vibrant tech industry with a growing number of IT companies. It offers competitive salaries for software developers in Southeast Asia.",
    zone: 'Asia/Saigon',
    std: 7
  },
  {
    name: "Myanmar",
    average_salary: 10000,
    description: "Myanmar's tech industry is in the early stages of development, offering lower salaries for software developers compared to neighboring countries.",
    zone: 'Asia/Rangoon',
    std: 6.5
  },
  {
    name: "Kazakhstan",
    average_salary: 22000,
    description: "Kazakhstan is developing its tech sector, focusing on innovation and IT services, with competitive salaries for software developers.",
    zone: 'Asia/Qyzylorda',
    std: 5
  },
  {
    name: "Qatar",
    average_salary: 55000,
    description: "Qatar's tech industry is advanced, driven by substantial investments in IT infrastructure and innovation, offering high salaries for software developers.",
    zone: 'Asia/Qatar',
    std: 3
  },
  {
    name: "Indonesia",
    average_salary: 20000,
    description: "Indonesia has a rapidly growing tech industry, particularly in Jakarta, offering competitive salaries for software developers in Southeast Asia.",
    zone: 'Asia/Pontianak',
    std: 7
  },
  {
    name: "Cambodia",
    average_salary: 12000,
    description: "Cambodia's tech sector is developing, with increasing opportunities for software developers and a focus on digital growth.",
    zone: 'Asia/Phnom_Penh',
    std: 7
  },
  {
    name: "Oman",
    average_salary: 45000,
    description: "Oman has a growing tech industry, driven by significant investments in IT and digital transformation, offering high salaries for software developers.",
    zone: 'Asia/Muscat',
    std: 4
  },
  {
    name: "Philippines",
    average_salary: 20000,
    description: "The Philippines has a strong IT and BPO industry, with increasing opportunities for software developers and competitive salaries within the region.",
    zone: 'Asia/Manila',
    std: 8
  },
  {
    name: "Kuwait",
    average_salary: 50000,
    description: "Kuwait offers high salaries for software developers, driven by significant investments in technology and a focus on digital innovation.",
    zone: 'Asia/Kuwait',
    std: 3
  },
  {
    name: "Malaysia",
    average_salary: 30000,
    description: "Malaysia has a well-developed tech industry, particularly in Kuala Lumpur, offering competitive salaries for software developers.",
    zone: 'Asia/Kuala_Lumpur',
    std: 8
  },
  {
    name: "Pakistan",
    average_salary: 15000,
    description: "Pakistan's tech industry is growing rapidly, with increasing opportunities for software developers and a focus on innovation and digital services.",
    zone: 'Asia/Karachi',
    std: 5
  },
  {
    name: "Afghanistan",
    average_salary: 10000,
    description: "Afghanistan's tech industry is underdeveloped, with limited opportunities and lower salaries for software developers due to ongoing challenges.",
    zone: 'Asia/Kabul',
    std: 4.5
  },
  {
    name: "Palestine",
    average_salary: 15000,
    description: "Palestine has a developing tech sector, with opportunities for software developers primarily in local startups and IT services.",
    zone: 'Asia/Gaza',
    std: 2
  },
  {
    name: "Tajikistan",
    average_salary: 12000,
    description: "Tajikistan's tech industry is emerging, with a focus on local IT services and software development, offering modest salaries for developers.",
    zone: 'Asia/Dushanbe',
    std: 5
  },
  {
    name: "East Timor",
    average_salary: 12000,
    description: "East Timor's tech sector is in its early stages, with limited opportunities for software developers and lower average salaries.",
    zone: 'Asia/Dili',
    std: 9
  },
  {
    name: "Bangladesh",
    average_salary: 15000,
    description: "Bangladesh has a growing tech industry, particularly in Dhaka, offering competitive salaries for software developers in South Asia.",
    zone: 'Asia/Dhaka',
    std: 6
  },
  {
    name: "Syria",
    average_salary: 8000,
    description: "Syria's tech industry is severely impacted by ongoing conflict, with limited opportunities and lower salaries for software developers.",
    zone: 'Asia/Damascus',
    std: 3
  },
  {
    name: "Brunei",
    average_salary: 40000,
    description: "Brunei's tech industry is developing, driven by government initiatives to diversify the economy, offering competitive salaries for software developers.",
    zone: 'Asia/Brunei',
    std: 8
  },
  {
    name: "Lebanon",
    average_salary: 20000,
    description: "Lebanon has a growing tech sector, with opportunities for software developers in startups and IT services, offering competitive salaries within the region.",
    zone: 'Asia/Beirut',
    std: 2
  },
  {
    name: "Thailand",
    average_salary: 25000,
    description: "Thailand has a vibrant tech industry, particularly in Bangkok, offering competitive salaries for software developers and a thriving startup ecosystem.",
    zone: 'Asia/Bangkok',
    std: 7
  },
  {
    name: "Bahrain",
    average_salary: 50000,
    description: "Bahrain's tech industry is advanced, with significant investments in IT infrastructure, offering high salaries for software developers.",
    zone: 'Asia/Bahrain',
    std: 3
  },
  {
    name: "Iraq",
    average_salary: 10000,
    description: "Iraq's tech industry is developing amidst challenges, offering modest salaries for software developers with a focus on rebuilding and innovation.",
    zone: 'Asia/Baghdad',
    std: 3
  },
  {
    name: "Kyrgyzstan",
    average_salary: 12000,
    description: "Kyrgyzstan's tech sector is emerging, with opportunities for software developers primarily in local IT services and startups.",
    zone: 'Asia/Bishkek',
    std: 6
  },
  {
    name: "Azerbaijan",
    average_salary: 20000,
    description: "Azerbaijan's tech industry is growing, with increasing opportunities for software developers and a focus on digital transformation.",
    zone: 'Asia/Baku',
    std: 4
  },
  {
    name: "Turkmenistan",
    average_salary: 15000,
    description: "Turkmenistan's tech sector is developing slowly, offering limited opportunities and moderate salaries for software developers.",
    zone: 'Asia/Ashgabat',
    std: 5
  },
  {
    name: "Jordan",
    average_salary: 25000,
    description: "Jordan has a well-developed tech industry, particularly in Amman, offering competitive salaries for software developers and a strong startup ecosystem.",
    zone: 'Asia/Amman',
    std: 3
  },
  {
    name: "Yemen",
    average_salary: 8000,
    description: "Yemen's tech industry is severely impacted by ongoing conflict, with limited opportunities and lower salaries for software developers.",
    zone: 'Asia/Aden',
    std: 3
  },
  {
    name: "Greenland",
    average_salary: 35000,
    description: "Greenland's tech industry is small but growing, with opportunities for software developers primarily in government and research sectors.",
    zone: 'America/Thule',
    std: -4
  },
  {
    name: "Honduras",
    average_salary: 15000,
    description: "Honduras has a developing tech industry, with opportunities for software developers primarily in IT services and local startups.",
    zone: 'America/Tegucigalpa',
    std: -6
  },
  {
    name: "Dominican Republic",
    average_salary: 18000,
    description: "The Dominican Republic has a growing tech industry, particularly in Santo Domingo, offering moderate salaries for software developers.",
    zone: 'America/Santo_Domingo',
    std: -4
  },
  {
    name: "Argentina",
    average_salary: 25000,
    description: "Argentina has a thriving tech industry, particularly in Rosario and Buenos Aires, offering competitive salaries for software developers.",
    zone: 'America/Rosario',
    std: -3
  },
  {
    name: "Puerto Rico",
    average_salary: 22000,
    description: "Puerto Rico's tech sector is growing, driven by significant investments in IT and digital services, offering competitive salaries for software developers.",
    zone: 'America/Puerto_Rico',
    std: -4
  },
  {
    name: "Trinidad and Tobago",
    average_salary: 20000,
    description: "Trinidad and Tobago's tech industry is developing, with opportunities for software developers in IT services and digital transformation.",
    zone: 'America/Port_of_Spain',
    std: -4
  },
  {
    name: "Suriname",
    average_salary: 15000,
    description: "Suriname's tech sector is emerging, with opportunities for software developers primarily in local startups and IT services.",
    zone: 'America/Paramaribo',
    std: -3
  },
  {
    name: "Panama",
    average_salary: 25000,
    description: "Panama has a growing tech industry, particularly in Panama City, offering competitive salaries for software developers and a thriving startup ecosystem.",
    zone: 'America/Panama',
    std: -5
  },
  {
    name: "Bahamas",
    average_salary: 30000,
    description: "The Bahamas' tech industry is small but growing, with opportunities for software developers primarily in government and tourism-related sectors.",
    zone: 'America/Nassau',
    std: -5
  },
  {
    name: "Uruguay",
    average_salary: 28000,
    description: "Uruguay has a well-developed tech industry, particularly in Montevideo, offering competitive salaries for software developers and a supportive startup ecosystem.",
    zone: 'America/Montevideo',
    std: -3
  },
  {
    name: "Nicaragua",
    average_salary: 12000,
    description: "Nicaragua's tech sector is developing, with opportunities for software developers primarily in local IT services and startups.",
    zone: 'America/Managua',
    std: -6
  },
  {
    name: "Peru",
    average_salary: 20000,
    description: "Peru has a growing tech industry, particularly in Lima, offering competitive salaries for software developers and a vibrant startup ecosystem.",
    zone: 'America/Lima',
    std: -5
  },
  {
    name: "Bolivia",
    average_salary: 18000,
    description: "Bolivia's tech industry is developing, with opportunities for software developers primarily in local startups and IT services.",
    zone: 'America/La_Paz',
    std: -4
  },
  {
    name: "Guyana",
    average_salary: 14000,
    description: "Guyana's tech sector is emerging, with opportunities for software developers primarily in government and local IT services.",
    zone: 'America/Guyana',
    std: -4
  },
  {
    name: "Grenada",
    average_salary: 16000,
    description: "Grenada's tech industry is growing slowly, with opportunities for software developers primarily in government and tourism-related sectors.",
    zone: 'America/Grenada',
    std: -4
  },
  {
    name: "Costa Rica",
    average_salary: 30000,
    description: "Costa Rica has a well-developed tech industry, particularly in San Jose, offering competitive salaries for software developers and a strong focus on innovation.",
    zone: 'America/Costa_Rica',
    std: -6
  },
  {
    name: "Venezuela",
    average_salary: 10000,
    description: "Venezuela's tech industry is facing challenges due to economic instability, offering lower salaries for software developers compared to neighboring countries.",
    zone: 'America/Caracas',
    std: -4
  },
  {
    name: "Colombia",
    average_salary: 22000,
    description: "Colombia has a thriving tech industry, particularly in Bogota and Medellin, offering competitive salaries for software developers and a growing startup ecosystem.",
    zone: 'America/Bogota',
    std: -5
  },
  {
    name: "Belize",
    average_salary: 16000,
    description: "Belize's tech sector is small but growing, with opportunities for software developers primarily in local IT services and tourism-related sectors.",
    zone: 'America/Belize',
    std: -6
  },
  {
    name: "Barbados",
    average_salary: 25000,
    description: "Barbados has a developing tech industry, with opportunities for software developers primarily in local startups and IT services.",
    zone: 'America/Barbados',
    std: -4
  },
  {
    name: "Aruba",
    average_salary: 30000,
    description: "Aruba's tech sector is growing, with opportunities for software developers primarily in government and tourism-related sectors.",
    zone: 'America/Aruba',
    std: -4
  },
  {
    name: "Paraguay",
    average_salary: 18000,
    description: "Paraguay's tech industry is developing, with opportunities for software developers primarily in local startups and IT services.",
    zone: 'America/Asuncion',
    std: -4
  },
  {
    name: "Namibia",
    average_salary: 20000,
    description: "Namibia's tech industry is emerging, with opportunities for software developers primarily in local IT services and telecommunications.",
    zone: 'Africa/Windhoek',
    std: 2
  },
  {
    name: "Tunisia",
    average_salary: 18000,
    description: "Tunisia has a growing tech industry, particularly in Tunis, offering competitive salaries for software developers and a focus on digital transformation.",
    zone: 'Africa/Tunis',
    std: 1
  },
  {
    name: "Mali",
    average_salary: 15000,
    description: "Mali's tech sector is developing, with opportunities for software developers primarily in local IT services and government-related projects.",
    zone: 'Africa/Timbuktu',
    std: 0
  },
 
  {
    name: "Benin",
    average_salary: 15000,
    description: "Benin's tech industry is emerging, with opportunities for software developers primarily in local IT services and government-related projects.",
    zone: 'Africa/Porto-Novo',
    std: 1
  },
  {
    name: "Burkina Faso",
    average_salary: 14000,
    description: "Burkina Faso's tech sector is developing, with opportunities for software developers primarily in local IT services and government-related projects.",
    zone: 'Africa/Ouagadougou',
    std: 0
  },
  {
    name: "Mauritania",
    average_salary: 13000,
    description: "Mauritania's tech industry is nascent, with limited opportunities for software developers primarily in local IT services and government-related projects.",
    zone: 'Africa/Nouakchott',
    std: 0
  },
  {
    name: "Chad",
    average_salary: 14000,
    description: "Chad's tech sector is emerging, with opportunities for software developers primarily in local IT services and government-related projects.",
    zone: 'Africa/Ndjamena',
    std: 1
  },
  {
    name: "Liberia",
    average_salary: 12000,
    description: "Liberia's tech industry is developing, with opportunities for software developers primarily in local IT services and government-related projects.",
    zone: 'Africa/Monrovia',
    std: 0
  },
  {
    name: "Somalia",
    average_salary: 10000,
    description: "Somalia's tech sector is challenging due to ongoing instability, offering limited opportunities for software developers primarily in local IT services.",
    zone: 'Africa/Mogadishu',
    std: 3
  },
  {
    name: "Eswatini",
    average_salary: 18000,
    description: "Eswatini's tech industry is emerging, with opportunities for software developers primarily in local IT services and telecommunications.",
    zone: 'Africa/Mbabane',
    std: 2
  },
  {
    name: "Lesotho",
    average_salary: 17000,
    description: "Lesotho's tech sector is developing, with opportunities for software developers primarily in local IT services and telecommunications.",
    zone: 'Africa/Maseru',
    std: 2
  },
  {
    name: "Equatorial Guinea",
    average_salary: 20000,
    description: "Equatorial Guinea's tech industry is nascent, with limited opportunities for software developers primarily in government-related projects and oil & gas sectors.",
    zone: 'Africa/Malabo',
    std: 1
  },
  {
    name: "Zambia",
    average_salary: 20000,
    description: "Zambia's tech industry is growing, with opportunities for software developers primarily in local IT services, telecommunications, and mining-related sectors.",
    zone: 'Africa/Lusaka',
    std: 2
  },
  {
    name: "Congo",
    average_salary: 22000,
    description: "The Republic of the Congo's tech sector is developing, with opportunities for software developers primarily in local IT services, telecommunications, and government-related projects.",
    zone: 'Africa/Lubumbashi',
    std: 2
  },
  {
    name: "Angola",
    average_salary: 25000,
    description: "Angola's tech industry is growing, with opportunities for software developers primarily in local IT services, telecommunications, and oil & gas sectors.",
    zone: 'Africa/Luanda',
    std: 1
  },
  {
    name: "Gabon",
    average_salary: 24000,
    description: "Gabon's tech sector is developing, with opportunities for software developers primarily in local IT services, telecommunications, and government-related projects.",
    zone: 'Africa/Libreville',
    std: 1
  },
  {
    name: "Togo",
    average_salary: 16000,
    description: "Togo's tech industry is emerging, with opportunities for software developers primarily in local IT services, telecommunications, and government-related projects.",
    zone: 'Africa/Lome',
    std: 0
  },
  {
    name: "Nigeria",
    average_salary: 30000,
    description: "Nigeria has a thriving tech industry, particularly in Lagos, offering competitive salaries for software developers and a vibrant startup ecosystem.",
    zone: 'Africa/Lagos',
    std: 1
  },
  {
    name: "Cameroon",
    average_salary: 25000,
    description: "Cameroon's tech industry is growing, with opportunities for software developers primarily in Douala and Yaounde, offering competitive salaries and a supportive startup ecosystem.",
    zone: 'Africa/Lagos',
    std: 1
  },
  {
    name: "Ivory Coast",
    average_salary: 28000,
    description: "Ivory Coast has a thriving tech industry, particularly in Abidjan, offering competitive salaries for software developers and a dynamic startup ecosystem.",
    zone: 'Africa/Abidjian',
    std: 0
  },
  {
    name: "Ghana",
    average_salary: 26000,
    description: "Ghana has a growing tech industry, particularly in Accra, offering competitive salaries for software developers and a supportive startup ecosystem.",
    zone: 'Africa/Accra',
    std: 0
  },
  {
    name: "Algeria",
    average_salary: 22000,
    description: "Algeria's tech industry is growing, with opportunities for software developers primarily in Algiers, offering competitive salaries and a focus on digital transformation.",
    zone: 'Africa/Algiers',
    std: 1
  },
  {
    name: "Eritrea",
    average_salary: 10000,
    description: "Eritrea's tech sector is nascent, with limited opportunities for software developers primarily in local IT services and government-related projects.",
    zone: 'Africa/Asmara',
    std: 3
  },
  {
    name: "Central African Republic",
    average_salary: 13000,
    description: "The Central African Republic's tech industry is emerging, with opportunities for software developers primarily in local IT services and government-related projects.",
    zone: 'Africa/Bangui',
    std: 1
  },
  {
    name: "Guinea-Bissau",
    average_salary: 11000,
    description: "Guinea-Bissau's tech sector is developing, with opportunities for software developers primarily in local IT services and government-related projects.",
    zone: 'Africa/Bissau',
    std: 0
  },
  {
    name: "Malawi",
    average_salary: 17000,
    description: "Malawi's tech industry is growing, with opportunities for software developers primarily in local IT services, telecommunications, and agriculture-related sectors.",
    zone: 'Africa/Blantyre',
    std: 2
  },
  {
    name: "Morocco",
    average_salary: 26000,
    description: "Morocco's tech industry is growing, particularly in Casablanca and Rabat, offering competitive salaries for software developers and a focus on digital transformation.",
    zone: 'Africa/Casablanca',
    std: 1
  },
  {
    name: "Guinea",
    average_salary: 13000,
    description: "Guinea's tech sector is emerging, with opportunities for software developers primarily in local IT services and government-related projects.",
    zone: 'Africa/Conakry',
    std: 0
  },
  {
    name: "Senegal",
    average_salary: 15000,
    description: "Senegal's tech industry is growing, particularly in Dakar, offering moderate salaries for software developers and a supportive startup ecosystem.",
    zone: 'Africa/Dakar',
    std: 0
  },
  {
    name: "Tanzania",
    average_salary: 18000,
    description: "Tanzania's tech industry is emerging, particularly in Dar es Salaam, offering competitive salaries for software developers and a focus on digital transformation.",
    zone: 'Africa/Dar_es_Salaam',
    std: 3
  },
  {
    name: "Djibouti",
    average_salary: 16000,
    description: "Djibouti's tech sector is growing, with opportunities for software developers primarily in local IT services and government-related projects.",
    zone: 'Africa/Djibouti',
    std: 3
  },
  {
    name: "Sierra Leone",
    average_salary: 14000,
    description: "Sierra Leone's tech industry is emerging, with opportunities for software developers primarily in local IT services and government-related projects.",
    zone: 'Africa/Freetown',
    std: 0
  },
  {
    name: "Botswana",
    average_salary: 25000,
    description: "Botswana's tech industry is growing, particularly in Gaborone, offering competitive salaries for software developers and a focus on digital innovation.",
    zone: 'Africa/Gaborone',
    std: 2
  },
  {
    name: "Zimbabwe",
    average_salary: 22000,
    description: "Zimbabwe's tech industry is growing, particularly in Harare, offering competitive salaries for software developers and a focus on digital innovation.",
    zone: 'Africa/Harare',
    std: 2
  },
  {
    name: "South Africa",
    average_salary: 30000,
    description: "South Africa has a well-developed tech industry, particularly in Johannesburg and Cape Town, offering competitive salaries for software developers and a thriving startup ecosystem.",
    zone: 'Africa/Johannesburg',
    std: 2
  },
  {
    name: "Sudan",
    average_salary: 18000,
    description: "Sudan's tech industry is emerging, with opportunities for software developers primarily in Khartoum, offering moderate salaries and a growing focus on digital transformation.",
    zone: 'Africa/Khartoum',
    std: 2
  },
  {
    name: "South Sudan",
    average_salary: 16000,
    description: "South Sudan's tech sector is nascent, with limited opportunities for software developers primarily in local IT services and government-related projects.",
    zone: 'Africa/Juba',
    std: 2
  },
  {
    name: "Rwanda",
    average_salary: 22000,
    description: "Rwanda's tech industry is growing rapidly, particularly in Kigali, offering competitive salaries for software developers and a strong focus on innovation.",
    zone: 'Africa/Kigali',
    std: 2
  },
  {
    name: "Niger",
    average_salary: 12000,
    description: "Niger's tech industry is in its early stages, with limited opportunities for software developers primarily in local IT services and government-related projects.",
    zone: 'Africa/Niamey',
    std: 1
  },  
  {
    name: "Iceland",
    average_salary: 85000, 
    description: "Iceland offers competitive salaries for software developers, reflecting its high standard of living, strong tech infrastructure, and innovation-driven economy.", 
    zone: 'Iceland',
    std: 0
  },
  {
    name: "Madagascar",
    average_salary: 30000,
    description: "Madagascar's tech industry is growing, offering opportunities for software developers. The average salary reflects the local economic conditions and cost of living.", 
    zone: 'Indian/Antananarivo',
    std: 3
  },
  {
    name: "Seychelles",
    average_salary: 40000, 
    description: "Seychelles provides opportunities for software developers in its emerging tech sector. The average salary reflects the country's economic status and cost of living.", 
    zone: 'Indian/Mahe',
    std: 4
  }  ,
  {
    name: "Saudi Arabia",
    average_salary: 60000, 
    description: "Saudi Arabia offers competitive salaries for software developers, driven by its rapidly growing tech sector and substantial investments in digital infrastructure.", 
    zone: 'Asia/Riyadh',
    std: 3
  },
  {
    name: "Uganda",
    average_salary: 25000,
    description: "Uganda's tech industry is nascent but growing steadily, offering opportunities for software developers. The average salary reflects the local economic conditions and cost of living, making it an affordable location for tech professionals.",
    zone: 'Africa/Kampala',
    std: 3
  }
];
export default softwareDeveloperSalaries;
