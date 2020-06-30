

function solve(data) {
    const commandMap = {
        create: (acc,name,_,inheritName) => {
          
            if(!inheritName) {
                 acc[name] = {};
                return acc;
            }
            const parent = acc[inheritName];

            acc[name] = Object.create(parent);
            return acc;
        },
        set: (acc,name,propName,propValue) => {
            acc[name][propName] = propValue;
            return acc;
        },
        print: (acc) => {
            console.log(Object.values(acc));
            return acc;
        }
    };

    return data.reduce((acc,currentCommand) => {
        const [op,v1,v2,v3] = currentCommand.split(' ');
        return commandMap[op](acc,v1,v2,v3);
    },[]);
}


console.log(solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
));