document.getElementsByName("j_username")[0].value = "101522089";
document.getElementsByName("j_password")[0].value = "E124jae5566";
document.querySelector("input[type='submit']").setAttribute("type", "text");
HTMLFormElement.prototype.submit.call(document.querySelector("form[name='f']"));
document.querySelector("input[id='checkin']").setAttribute('checked', true);
HTMLFormElement.prototype.submit.call(document.querySelector("form[method='POST']"));