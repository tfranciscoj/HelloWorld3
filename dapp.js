(function (Contract) {
    var web3;
    var instance;



    function init(cb) {
        web3 = new Web3(
            (window.web3 && window.web3.currentProvider) ||
            new Web3.providers.HttpProvider(Contract.endpoint));

        var contract_interface = web3.eth.contract(Contract.abi);
        instance = contract_interface.at(Contract.address);
        cb();
    }


    // init function takes as argument the function cb() and does the following:
    // 1. creates a web3 object
    // 2. grabs abi from our contract and creates an instance of contract at the given address
    // 3. calls the function cb


    function testMessage(){
        instance.message( function(error, result){
            if(error){
                          console.error("Could not get artice:", error);
                          return;
            }
            else{
                    $("#test-message").html(result);
            }
        });
    }


    // testMessage function queries the HelloWorld contract for value
    // of variable message then applies function that, if goes ok, prints
    // the value on test-message in html
    
    function documentreadyFunction(){
        init(setMessage);
          testMessage();
    }



    $(document).ready(documentreadyFunction);

})(Contracts['HelloWorld']);
