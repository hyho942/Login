// 각 변수 선언
var id = $(".id_control").val();
var pw = $(".pw_control").val();
var name = $(".name_control").val();
var address = $(".address_input").val();
// id 값으로 자동으로 타입

$(document).ready(function() {
    // 주소 검색
    $(function() {
        $("#zipcode_search").click(function() {
            new daum.Postcode({
                oncomplete: function(data) {
                    console.log(data);
                    $(".address_input").val(data.address);
                }
            }).open();
        });
    });
    // 아이디 입력, 오류 (값이 없을 경우 "#message_pw" 보이기)
    $(".id_control").blur(function() {
        if ($(".id_control").val() === "") {
            $(".idError").text("아이디를 입력해주세요!");
            $(".idError").show();
            $("#message_id").show();
        }
    });
    $(".id_control").focus(function() {
        $("#message_id").hide();
        $("#message_pw").hide();
        $(".idError").hide();
        $(".pwError").hide();
        $(".nameError").hide();
    });
    // 패스워드 입력, 오류
    $(".pw_control").blur(function() {
        if ($(".pw_control").val() === "") {
            $("#message_pw").show();
            $(".pwError").text("패스워드를 입력해주세요!");
            $(".pwError").show();
        }
    });
    $(".pw_control").focus(function() {
        $("#message_pw").show();
        $("message_pw").hide();
        $(".pwError").hide();
        $(".nameError").hide();
    });
    // 이름 입력, 오류
    $(".name_control").blur(function() {
        if (/^[가-힣]{2,4}$/i.test($(".name_control").val()) === false) {
            $(".nameError").text("이름을 입력해주세요!");
            $(".nameError").show();
            alert("이름이 틀렸습니다!");
            return false;
        }

        $(".name_control").focus(function() {
            $(".nameError").hide();
        });
    });

    // 이메일, 오류
    $("#exampleInputEmail1").blur(function() {
        if ($("#exampleInputEmail1").val() === "") {
            $(".emailError").text("이메일을 입력해주세요!");
        }
        if (
            /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(
                $("#exampleInputEmail1").val()
            ) === false
        ) {
            alert("이메일 형식이 잘못되었습니다.");
            return false;
        }
    });

    // When the user starts to type something inside the password field
    $(".pw_control").keyup(function() {
        // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if (
            $(".pw_control")
                .val()
                .match(lowerCaseLetters)
        ) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }
        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if (
            $(".pw_control")
                .val()
                .match(upperCaseLetters)
        ) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }
        // Validate numbers
        var numbers = /[0-9]/g;
        if (
            $(".pw_control")
                .val()
                .match(numbers)
        ) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }
        // Validate length
        var length = document.getElementById("length");
        if ($(".pw_control").val().length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
    });
});
