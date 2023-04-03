fetch("laptop_details.json") //display table when enter the website //pure function- json data
    .then(function(response) {
        return response.json();
    })
    .then(function(laptop_details) { //pure function
        let placeholder = document.querySelector("#laptop-data");
        let out = "";
        for (let laptop of laptop_details) {

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

    fetch("laptop_details.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(laptop_details) {
            queryA = document.getElementById('dropdownlistCompany').value;
            queryB = document.getElementById('dropdownlistCPU').value;
            queryC = document.getElementById('dropdownlistRAM').value;
            queryD = document.getElementById('dropdownlistTypeName').value;

            let placeholder = document.querySelector("#laptop-data");
            let out = "";
            for (let laptop of laptop_details) { //high order function
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