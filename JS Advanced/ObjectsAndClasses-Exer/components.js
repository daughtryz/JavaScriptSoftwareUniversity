

function solve(data) {
    const systems = {};
    for(let line of data) {
        let components = line.split(' | ');
        let systemName = components[0];
        let componentName = components[1];
        let subComponentName = components[2];

        if(systems.hasOwnProperty(systemName) === false) {
            systems[systemName] = {};
        }

        if(systems[systemName].hasOwnProperty(componentName) === true) {
            systems[systemName][componentName].push(subComponentName);
        } else {
            let helper = [];
            helper.push(subComponentName);
            systems[systemName][componentName] = helper;
        }
        

    }

   
     Object.entries(systems).sort((a,b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]);
    }).forEach(([system,component]) => {
        console.log(system);
        Object.entries(component).sort((a,b) => {
            return b[1].length - a[1].length
        }).forEach(([name,sub]) => {
            console.log(`|||${name}`);
            sub.forEach(c => console.log('||||||'+c));

        });
    });
   
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);