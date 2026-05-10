<?php
echo (bool) "Hello PHP";
echo '<br>';
echo gettype((int) ((bool) "Hello PHP"));

// Needed Output
// 1
// integer