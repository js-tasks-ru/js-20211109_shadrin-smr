export default class NotificationMessage {
  element;
  static activeNotification;

  constructor(
    message = '',
    {
      type = 'success',
      duration = 0
    } = {}) {
    this.message = message;
    this.type = type;
    this.duration = duration;
    this.initElement();
  }

  initElement() {
    if (NotificationMessage.activeNotification) {
      NotificationMessage.activeNotification.remove();
    }
    const element = document.createElement('div');
    element.innerHTML = this.template;
    this.element = element.firstElementChild;
    NotificationMessage.activeNotification = this.element;
  }

  show(cover = document.createElement('div')) {
    cover.innerHTML = NotificationMessage.activeNotification.outerHTML;
    document.body.append(NotificationMessage.activeNotification);
    setTimeout(() => {
      this.remove();
    }, this.duration);
  }

  get template() {
    return `
      <div id = "notification" class="notification ${this.type}" style="--value:${this.duration / 1000}s">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">${this.type}</div>
          <div class="notification-body">
              ${this.message}
          </div>
        </div>
      </div>
    `;
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }
}
