$(function() {
  $("#usersRow").on("click", ".userDeleteBtn", function(e) {
    e.preventDefault();
    const userId = $(this).data("user-id");
    $.ajax({
      url: `//localhost:3000/users/${ userId }`,
      method: 'DELETE'
    }).done((data) => {
      // console.log(data);

      let message = "刪除成功！"
      $('#alertContent').text(message);
      $('#alertBlock').show();

      // 移除指定使用者的 tr
      $(this).parents('tr').remove();
    });
  });
});