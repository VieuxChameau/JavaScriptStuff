// First allocation var with undefined
// Move up declared functions
// then code
// all the statement after the return are unreachable (main scope)
// function expression are statement so unreachable
{
    // Code
    function theBridgeOfHoistingDoom() {
        function balrog() {
            return "fire";
        }
        var ring;
        function elf() {
            return "pointy ears";
        }
        ring = wizard;
        wizard = balrog;
        return wizard();
        function balrog() {
            return "whip";
        }
        function wizard() {
            return "white";
        }
        var power = ring();
        return elf();
        function elf() {
            return "immortal";
        }
    }

// become for the compiler
    function theBridgeOfHoistingDoom() {
        var ring = undefined;
        var power = undefined;

        function balrog() {
            return "whip";
        }

        function elf() {
            return "immortal";
        }

        function wizard() {
            return "white";
        }

        ring = wizard;
        wizard = balrog;

        return wizard();
    }
}

{
    // Code

    function theBridgeOfHoistingDoom( ) {
        function fellowship() {
            return "friends";
        }
        var sword = "sting";
        var dwarf = function() {
            return "axe";
        };
        var fall = "Fly you fools!";
        fellowship = function() {
            return "broken";
        };
        ring();
        return sword;
        fellowship = function() {
            return "mines";
        };
        sword = function() {
            return "glamdring";
        };
        var ring = function() {
            return "precious";
        };

    }
// compiler
    function theBridgeOfHoistingDoom( ) {
        var sword = undefined;
        var dwarf = undefined;
        var fall = undefined;
        var ring = undefined;
        function fellowship() {
            return "friends";
        }
        sword = "sting";
        dwarf = function() {
            return "axe";
        };
        fall = "Fly you fools!";
        fellowship = function() {
            return "broken";
        };
        ring();
        return sword;
    }
}



