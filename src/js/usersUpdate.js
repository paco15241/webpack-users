$(function() {
  if($("#editUserForm").length > 0) {
    const params = new URLSearchParams(location.search.slice(1));
    const userId = params.get('user');
    const url = `//localhost:3000/users/${ userId }`;

    // 取得使用者資料
    $.get(url).done((data) => {
      //console.log(data);
      $.each(data, (key, value) => {
        $(`#editUserForm input[name=${ key }]`).val(value);
      });
    });

    // 更新使用者資料
    $("#editUserForm").validate({
      rules: {
        "name": {
          required: true
        },
        "email": {
          required: true,
          email: true
        },
        "birthday": {
          required: true
        }
      },
      messages: {
        "name": {
          required: "請勿空白！"
        },
        "email": {
          required: "請勿空白！",
          email: "請使用 Email 格式"
        },
        "birthday": {
          required: "請勿空白！"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          url: `//localhost:3000/users/${ userId }`,
          method: 'PATCH',
          data: $(form).serialize(),
          dataType: 'json'
        }).done((data) => {
          // console.log(data);
          let message = '資料更新成功！'
          window.location = `http://localhost:4000/users/index.html?alert=${ message }`;
        });
      }
    });
  }
});