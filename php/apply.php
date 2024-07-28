<?php
session_start();

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);

    if (!isset($_SESSION['applications'])) {
        $_SESSION['applications'] = [];
    }

    $_SESSION['applications'][] = [
        'name' => $name,
        'phone' => $phone,
        'timestamp' => date('Y-m-d H:i:s')
    ];

    echo json_encode(['status' => 'success', 'message' => 'Application received']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>