const element = document.querySelector('.js-select');
const choices = new Choices(element, {
  // поиск включен
	searchEnabled: false,
  // пункт выбрать текст
	itemSelectText: '',
  // должен сортировать: ложь
	shouldSort: false,
  // положение: 'кнопка'
	position: 'bottom'
});


    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("mymap1", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [48.872185, 2.354224],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 12,
            //
            controls: []},

            {
              suppressMapOpenBlock: true, /* Убираем элементы управления*/
            }

        );

        //     // Создание геообъекта с типом точка (метка).
        // var myGeoObject = new ymaps.GeoObject({
        //   geometry: {
        //       type: "Point", // тип геометрии - точка
        //       coordinates: [48.872185, 2.354224] // координаты точки
        //   }
        // });

        var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
          iconLayout: 'default#image',
          iconImageHref: './img/location_icon.svg',
          iconImageSize: [48, 48],
          iconImageOffset: [-5, -42]
      });

        // Размещение геообъекта на карте.
        // myMap.geoObjects.add(myGeoObject);
        myMap.geoObjects.add(myPlacemark);

    }


const phoneElement = document.querySelector(".js-tel");

const im = new Inputmask("+7(999) 999-99-99");
im.mask(phoneElement);

const validation = new window.JustValidate('.form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid #FF5C00',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#FF5C00',
  },
  focusInvalidField: true,
  lockForm: true,
});

validation
.addField('.js-name', [

  {
    rule: 'required',
    errorMessage: 'Вы не ввели имя'
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Имя должно содержать хотя бы 3 буквы'
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Имя не может содержать более 30 символов'
  }
])

.addField('.js-mail', [
  {
    rule: 'email',
    errorMessage: 'Вы не ввели e-mail'
  },
  {
    rule: 'required',
    errorMessage: 'Поле обязательное для заполнения'
  }
])

.addField('.js-tel', [
  {
    validator: () => {
      const phone = phoneElement.inputmask.unmaskedvalue();
      const result = Number(phone) && phone.length === 10;
      return result === 0 ? false : result;
    },
    errorMessage: 'Вы не ввели телефон',
  }
]);


tippy('.tooltip__btn', {
  theme: 'tooltip',
});
