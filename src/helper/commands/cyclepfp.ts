function cyclepfp(state: string): void
{
    if(state == "on")
    {
        console.log("Cycling pfp on");
    }
    else if(state == "off")
    {
        console.log("Cycling pfp off");
    }
}

export const commandInfo = {
    name: "activate",
    description: "Activate the extension",
    minArgs: 1,
    execute: cyclepfp
};