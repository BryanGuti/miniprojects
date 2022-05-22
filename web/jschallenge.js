const subscriptionMessage = [
    {   subscription: "Free",
        subscriprionMessage: "Solo puedes tomar los cursos gratis."},
    {   subscription: "Basic",
        subscriprionMessage: "Puedes tomar casi todos los cursos de Platzi durante un mes."},
    {   subscription: "Expert",
        subscriprionMessage: "Puedes tomar casi todos los cursos de Platzi durante un año."},
    {   subscription: "Expert+",
        subscriprionMessage: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año."},
]

function mySubscription (chossenSubscription) {
    if (subscriptionMessage.some((sub) => sub.subscription  === chossenSubscription)){
        let index = subscriptionMessage.map((sub) => sub.subscription).indexOf(chossenSubscription);
        let message = subscriptionMessage[index].subscriprionMessage;
        console.log(message);
    }
    else{
        console.log("Opción incorrecta.");
    }
}