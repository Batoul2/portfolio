<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("../../data/users.json"), true);

    $username = $_POST["username"];
    $fullName = $_POST["fullName"];
    $password = $_POST["password"];
    $sex = $_POST["sex"];
    $dob = $_POST["dob"];

    if (usernameExists($data, $username)) {
        echo json_encode(["error" => "Username already exists. Please choose a different username."]);
        exit;
    }

    $newUser = [
        "username" => $username,
        "fullName" => $fullName,
        "password" => $password,
        "sex" => $sex,
        "dob" => $dob
    ];

    $data[] = $newUser;

    file_put_contents("../../data/users.json", json_encode($data));
    header("Location: ../views/login.html");
    exit;
}

function usernameExists($data, $username) {
    foreach ($data as $user) {
        if ($user["username"] === $username) {
            return true;
        }
    }
    return false;
}
?>
