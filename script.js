$(document).ready(function() {
	const textArray = textString.split('');
	const textElem = $('.hack-u-soul');

	let count = 0;

	setInterval(() => {
			if(textArray[count] === "\n") {
					textElem.append("<br>");
			}
			else {
					textElem.append(`<span class="hack-k1__username">${textArray[count]}</span>`);
			}

			count++;
			if (count === textArray.length) {
					count = 0;
			}
	}, 20);
});

var textString = `.
.
// Запускаємо сканування мережі на наявність підключених пристроїв
nmap -sn 192.168.1.0/24

// Визначаємо ОС та відкриті порти на пристроях, підключених до мережі
nmap -O -sV 192.168.1.101

// Пошук відкритих портів на пристрої клієнта
nmap -p 1-65535 192.168.1.101

// Отримання даних про пристрій клієнта
echo "Ім'я девайса: " && hostname
echo "Користувач: " && whoami
echo "IP-адреса: " && hostname -I

// Пошук потенційних вразливостей на пристрої клієнта
k1.py -h 192.168.1.101

// Перевірка наявності відкритих портів SSH на пристрої клієнта
nc -zv 192.168.1.101 22

// Спроба здійснити SSH-підключення до девайса клієнта
ssh user@192.168.1.101

// Виконання потенційно небезпечних команд на пристрої клієнта
rm -rf /home/user/Documents
sudo rm -rf /

---* 
# Початок процесу сканування портів
echo "Виконується сканування портів на вашому пристрої..."
sleep 3

# Запуск nmap для сканування відкритих портів
echo "Знаходження відкритих портів..."
nmap -sS -A -T4 127.0.0.1 | grep open
sleep 3

# Запуск команд для отримання інформації про вашу систему
echo "Збір інформації про вашу систему..."
uname -a
cat /proc/cpuinfo
cat /proc/meminfo
df -h
sleep 3

# Запуск команд для отримання імені користувача з броузера
echo "Отримання імені користувача з вашого броузера..."
who -a | grep 'whoami'
last | grep 'whoami'
sleep 3

# Запуск команд для сканування вразливостей на вашому пристрої
echo "Сканування вразливостей на вашому пристрої..."
nmap -v -script vuln 127.0.0.1
sleep 3

# Вивід повідомлення про спробу отримати доступ до вашого девайса
echo "Спроба отримати доступ до вашого девайса..."
echo "Будь ласка, введіть ім'я користувача, якого ви бажаєте надати доступ:"

# Чекаємо на введення імені користувача від клієнта
read username

# Створення нового користувача на вашому пристрої
echo "Створення нового користувача з ім'ям $username..."
sudo useradd -m -s /bin/bash $username
sleep 3

# Встановлення віддаленого доступу до вашого девайса
echo "Встановлення віддаленого доступу до вашого девайса
nmap -sS -A -T4 $REMOTE_ADDR
who -a
netstat -tuln
echo "ssh $REMOTE_USER@$REMOTE_ADDR"

echo "Віддалений доступ до вашого девайса було успішно встановлено для користувача $username."

...
.....
...
....
...`