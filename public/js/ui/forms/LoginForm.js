/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    console.log(`LoginForm.js: this =`);
    console.log(this);

    console.log(`LoginForm.js: data =`);
    console.log(data);

    User.login(data);
    Modal.onClose();
  }
}