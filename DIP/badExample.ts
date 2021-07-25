/* 
    Здесь класс Http представляет собой высокоуровневый компонент, а XMLHttpService — низкоуровневый. 
    Такая архитектура нарушает пункт принципа инверсии зависимостей: 
    «Модули верхних уровней не должны зависеть от модулей нижних уровней. Оба типа модулей должны зависеть от абстракций».
*/
class XmlHttpRequestSerice {
    request(){};
}
class XmlHttpService extends XmlHttpRequestSerice

class Http {
    constructor(private xmlHttpService: XmlHttpService)
    get(){
        this.xmlHttpService.request(url, 'GET')
    }
    post(){
        this.xmlHttpService.post(url, 'POST', data)
    }
}
/* 
    Класс Http вынужденно зависит от класса XMLHttpService. 
    Если мы решим изменить механизм, используемый классом Http для взаимодействия с сетью — скажем, 
    это будет Node.js-сервис или, например, сервис-заглушка, применяемый для целей тестирования, 
    нам придётся отредактировать все экземпляры класса Http, изменив соответствующий код. 
    Это нарушает принцип открытости-закрытости.
*/