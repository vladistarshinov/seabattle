const record = document.getElementById('record'),
      shot = document.getElementById('shot'),
      hit = document.getElementById('hit'),
      dead = document.getElementById('dead'),
      enemy = document.getElementById('enemy'),
      again = document.getElementById('again');

// При старте игры все параметры равны 0
const play = {
    record: 0,
    shot: 0,
    hit: 0,
    dead: 0,
     // сеттер - метод для отображения вычислений, прописаны действия: счетчик выстрелов и отображение на экране счетчика выстрелов
     set updateData(data) {
        this[data] += 1;
        this.render();
    },
    // рендерим значения
    render() {
        record.textContent = this.record;
        shot.textContent = this.shot;
        hit.textContent = this.hit;
        dead.textContent = this.dead;
    }
};

// После каждого клика реакция программы с методами на отображение
const show = {
    hit() {

    },
    // надо принять target с fire(), можем назвать как угодно, например, elem - ведь это элемент
    miss(elem) {
        // ссылка на объект show - упрощенно, добавляем класс miss (при нажатии ставятся крестики)
        this.changeClass(elem, 'miss');
    },
    dead() {
        
    },
    // будет менять класс нашего элемента 
    changeClass(elem, value) {
        elem.className = value;
    }
};

// Создается объект события event, содержащий коорд ячейки
const fire = (event) => {
    // console.log(event.target);
    const target = event.target;
    // Для начала проверяем, попали ли мы или нет
    show.miss(target);
    // добавляем счетчик выстрелов в текстовое поле (ВЫСТРЕЛОВ: 0), но мы не видим на экране (надо функцию рендера)
    play.shot = play.shot + 1;

    // обращаемся к сеттеру - какие данные мы хотим поменять
    play.updateData = 'shot';
    // вызываем метод рендера для отображения изменений (если нет сеттера в объекта play)
   // play.render();

};


// Инициализация игры через стрелочную функцию (упрощенная от function expression в ES6)
const init = () => {
    enemy.addEventListener('click', fire);
};

init();

/*
// function expression = можно вызвать функцию после объявления
const init = function () {
    console.log('init');
}
init();


start();
// function declaration - можно вызвать функцию до объявления
function start() {
    console.log('start');
} 


Если добавим сеттер в объект play    

// сеттер - метод для отображения вычислений, прописаны действия: счетчик выстрелов и отображение на экране счетчика выстрелов
    set updateData(data) {
        this[data] += 1;
        this.render();
    },

    то в fire убираем метод рендера и обращаемся к этому сеттеру и указываем ,что ему изменять

    play.updateData = 'shot';


*/