def add(x, y):
  return x + y


def subtract(x, y):
  return x - y


def multiply(x, y):
  return x * y


def divide(x, y):
  return x / y


while True:
  choice = input("수식을 입력해주세요. (0을 누르면 프로그램을 종료합니다.): ")
  strings = choice.split(' ')

  if choice == '0':
    print('종료합니다')
    break

  if strings[1] == '/' and strings[2] == '0':
    print("잘못된 수식입니다.")
    continue

  if strings[1] == '*':
    print(multiply(int(strings[0]), int(strings[2])))
  elif strings[1] == '+':
    print(int(strings[0]) + int(strings[2]))
  elif strings[1] == '-':
    print(int(strings[0]) - int(strings[2]))
  elif strings[1] == '/':
    print(int(strings[0]) / int(strings[2]))
