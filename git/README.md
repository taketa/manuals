1) Вернитесь к последней версии в ветке master  
git checkout master  
2) Создайте тег первой версии  
git tag v1  
3) Теги для предыдущих версий  
git checkout v1^  
4) Просмотр тегов с помощью команды tag  
git tag  
5) Отмена изменений в рабочем каталоге  
git checkout hello.html  
6) Отмена проиндексированных изменений (перед коммитом)
git reset HEAD hello.html
7) Команда reset (по умолчанию) не изменяет рабочий каталог. Поэтому рабочий каталог все еще содержит нежелательный комментарий. Мы можем использовать команду checkout hello.html
8) Чтобы отменить коммит, нам необходимо сделать коммит, который удаляет изменения, сохраненные нежелательным коммитом.
git revert HEAD --no-edit
9) Сброс коммитов к предшествующим коммиту Oops
git reset --hard v1
10) Удаление тега oops
git tag -d oops
11) Изменить предыдущий коммит
git commit --amend -m "Add an author/email comment"
12) поиск последнего коммита
git hist --max-count=1 
C Алиасами: 
git type <hash>
git dump <hash>
13) Создать и перейти на ветку
git checkout -b style
14) Переключение на ветку Master
git checkout master
15) 
