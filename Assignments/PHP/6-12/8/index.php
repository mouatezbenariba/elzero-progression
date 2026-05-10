<?php

echo "<pre>";
echo print_r(
    [
        "FrontEnd" => ["HTML", "CSS", 
        "JS" => [
            "Vuejs" => ["2" => "V2", "V3"], "Reactjs", "Svelte"
        ]
        ], 
        "BackEnd" => ["PHP", "MySQL", "Security"],
        "Git", "GitHub",
        "Testing" => ["Unit Testing", "End To End", "Integration"]
    ]
);
echo "</pre>";