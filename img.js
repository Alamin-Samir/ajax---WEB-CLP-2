$(document).ready(function () {

    const obj = {
        "name": "Peacock",
        "species": "Bird",
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyl1w7R2s43EPvv7Qqa77h-KEHRMCMyuxbDLWknNIpL0R5rWPASMpyVvkjNH9n9UzeLYOjoKlRLM5E4NrsQIksTczMbjSe83gwt9tUpM&s=10",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyl1w7R2s43EPvv7Qqa77h-KEHRMCMyuxbDLWknNIpL0R5rWPASMpyVvkjNH9n9UzeLYOjoKlRLM5E4NrsQIksTczMbjSe83gwt9tUpM&s=10"
    };

    $("#name").text(obj.name);
    $("#species").text(obj.species);

    $("#thumb").attr("src", obj.thumbnail);
    $("#large").attr("src", obj.image);

    
    $("#large").on("load", function () {
        console.log("Large image loaded successfully.");
    });

    $("#large").on("error", function () {
        console.error("Large image failed to load.");
    });
});
