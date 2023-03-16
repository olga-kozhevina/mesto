(()=>{"use strict";document.querySelectorAll(".popup__close-button");var t=document.querySelector(".profile__avatar"),e=document.querySelector("#error-message"),n=document.querySelector(".popup_type_edit-profile"),o=document.querySelector(".profile__edit-button"),r=n.querySelector(".popup__form"),i=r.querySelector(".popup__input_type_name"),u=r.querySelector(".popup__input_type_occupation"),a=document.querySelector(".profile__name"),c=document.querySelector(".profile__occupation"),l=document.querySelector(".profile__add-button"),s=document.querySelector(".popup_type_add-card"),p=(s.querySelector(".popup__submit-button"),document.querySelector("#add-card")),f=document.querySelector(".photo-grid"),y=(document.querySelector("#photo-grid-template").content,document.querySelector(".popup_type_card-modal")),m=(document.querySelector(".popup__image"),document.querySelector(".popup__image-name"),document.querySelector(".popup__input_type_card-name"),document.querySelector(".popup__input_type_image-src"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_active"});function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,v(o.key),o)}}function d(t,e,n){return(e=v(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==b(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===b(e)?e:String(e)}var _=function(){function t(e,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,"_showInputError",(function(t,e){var n=o._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(o._inputErrorClass),n.textContent=e,n.classList.add(o._errorClass)})),d(this,"_hideInputError",(function(t){var e=o._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(o._inputErrorClass),e.classList.remove(o._errorClass),e.textContent=""})),d(this,"_checkInputValidity",(function(t){t.validity.valid?o._hideInputError(t):o._showInputError(t,t.validationMessage)})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_setEventListeners",value:function(){var t=this;this.toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t.toggleButtonState()}))}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._disableSubmitButton(this._buttonElement):this._enableSubmitButton(this._buttonElement)}},{key:"resetValidation",value:function(){var t=this;this.toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const S=_;function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==g(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===g(r)?r:String(r)),o)}var r}var E=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=e,this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClick=this._handleOverlayClick.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleOverlayClick",value:function(t){t.target===this._popup&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",this._handleOverlayClick),this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){t.close()}))}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function j(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==k(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===k(r)?r:String(r)),o)}var r}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},C.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(o);if(r){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._popup=t,n._inputList=n._popup.querySelectorAll(".popup__input"),n._formElement=n._popup.querySelector(".popup__form"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"reset",value:function(){this._formElement.reset()}},{key:"close",value:function(){C(P(u.prototype),"close",this).call(this),this.reset()}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;C(P(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(e){e.preventDefault();var n=t._getInputValues();t._handleFormSubmit(n),t.close()}))}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function L(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==q(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===q(r)?r:String(r)),o)}var r}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},B.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(o);if(r){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupImageName=e._popup.querySelector(".popup__image-name"),e}return e=u,(n=[{key:"open",value:function(t){this._popupImageName.textContent=t.name,this._popupImage.src=t.link,this._popupImage.alt=t.name,B(T(u.prototype),"open",this).call(this)}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function M(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==D(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===D(r)?r:String(r)),o)}var r}var H=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._cardSelector=n,this._handleCardClick=o,this._element=this._getCardTemplate()}var e,n;return e=t,(n=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".photo-grid__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._cardImage=this._element.querySelector(".photo-grid__image"),this._cardName=this._element.querySelector(".photo-grid__item-name"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardName.textContent=this._name,this._likeButton=this._element.querySelector(".photo-grid__like-button"),this._deleteButton=this._element.querySelector(".photo-grid__delete-button"),this._getCardTemplate(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._handleCardLike()})),this._deleteButton.addEventListener("click",(function(){t._handleCardDelete()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"_handleCardLike",value:function(){this._likeButton.classList.toggle("photo-grid__like-button_active")}},{key:"_handleCardDelete",value:function(){this._element.remove()}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const R=H;function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function A(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==G(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==G(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===G(r)?r:String(r)),o)}var r}var U=function(){function t(e){var n=e.nameSelector,o=e.occupationSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=n,this._occupation=o}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,occupation:this._occupation.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.occupation;this._name.textContent=e,this._occupation.textContent=n}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function W(t){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(t)}function Y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==W(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==W(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===W(r)?r:String(r)),o)}var r}var N=function(){function t(e,n){var o=e.items,r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=o,this._renderer=r,this._container=n}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderedItems",value:function(){var t=this;this._renderedItems.forEach((function(e){t._renderer(e)}))}}])&&Y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function z(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==F(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===F(r)?r:String(r)),o)}var r}const J=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers={authorization:e.token,"Content-Type":"application/json"}}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://nomoreparties.co/v1/cohort-61",token:"52fc6959-8692-45e7-a047-982dcb1b275b"});var K=new S(m,r);K.enableValidation();var Q=new S(m,p);Q.enableValidation();var X=new x(s,(function(t){var e=et({name:t["card-name"],link:t.url});nt.addItem(e),X.close(),Q.toggleButtonState()}));X.setEventListeners();var Z=new x(n,(function(t){var e=t["profile-name"],n=t["profile-occupation"];tt.setUserInfo({name:e,occupation:n}),Z.close()}));Z.setEventListeners();var $=new V(y);$.setEventListeners(),l.addEventListener("click",(function(){X.open(),Q.resetValidation()})),o.addEventListener("click",(function(){var t=tt.getUserInfo(),e=t.name,n=t.occupation;Z.setInputValues({"profile-name":e,"profile-occupation":n}),K.resetValidation(),Z.open()}));var tt=new U({nameSelector:a,occupationSelector:c});function et(t){return new R(t,"#photo-grid-template",ot).generateCard()}var nt=new N({items:[{name:"Медуза австралийская",link:"https://images.unsplash.com/photo-1540968221243-29f5d70540bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"},{name:"Подводные скалы",link:"https://images.unsplash.com/photo-1632763247220-3a0706133316?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"},{name:"Морская черепаха",link:"https://images.unsplash.com/photo-1591025207163-942350e47db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Кораллы",link:"https://images.unsplash.com/photo-1520302659201-7ecf4ae863d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"},{name:"Красная рыба",link:"https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80"},{name:"Киты",link:"https://images.unsplash.com/photo-1518399681705-1c1a55e5e883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"}],renderer:function(t){var e=et(t);nt.addItem(e)}},f);function ot(t,e){$.open({name:t,link:e})}nt.renderedItems(),J.getUserInfo().then((function(e){i.textContent=e.name,u.textContent=e.about,t.src=e.avatar})).catch((function(t){console.log("Ошибка при получении информации о пользователе: ".concat(t)),e.textContent="Произошла ошибка при получении информации о пользователе"}))})();