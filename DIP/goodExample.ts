interface Connection {
  request(url: string, method: string);
}
class Http {
  constructor(private httpConnection: Connection) {}
  get(url: string) {
    this.httpConnection.request(url, 'GET');
  }
  post(url: string, data) {
    this.httpConnection.request(url, 'POST');
  }
}

// Services
class XMLHttpService implements Connection {
  request(url: string, method: string) {}
}
class NodeHttpService implements Connection {
  request(url: string, method: string) {}
}
class MocHttpService implements Connection {
  request(url: string, method: string) {}
}
/* 
    Как можно заметить, здесь высокоуровневые и низкоуровневые модули зависят от абстракций. 
    Класс Http (высокоуровневый модуль) зависит от интерфейса Connection (абстракция). 
    Классы XMLHttpService, NodeHttpService и MockHttpService 
    (низкоуровневые модули) также зависят от интерфейса Connection.
*/
/* 
    Кроме того, стоит отметить, что следуя принципу инверсии зависимостей, 
    мы соблюдаем и принцип подстановки Барбары Лисков. А именно, оказывается, 
    что типы XMLHttpService, NodeHttpService и MockHttpService могут служить заменой базовому типу Connection.
*/