// // Callback = Call + Later

// //understanding call back using Maggie example
function makeMaggie(rawMaggie, cb) {          //-> root function
    console.log(`Bringing ${rawMaggie} to make Maggi.`);
    cb();            //if this finction denies to call cb(), its IOC(Inversion of Control)
}                    //Also called over dependency kill -> cannot trust only a single
function boilWater(cb) {
    console.log("Water boiled");
    cb();
}
function addMaggie(cb) {
    console.log("maggie added");
    cb();
}
function serve(cb) {
    console.log("Maggi Served");
    cb();
}

makeMaggie("Yippe",()=>{        //Pyramid of Doom (POD)
    boilWater(()=>{
        addMaggie(()=>{
            serve(()=>{
                console.log("maggie finished and eaten");
            });
        });                      // Callback Hell
    });
});



//-------------------------------------------------------
// //understanding call back using SandwichMaking example

function makeSandwich(breadType, cb) {
	//-> root function
	console.log(`Bringing ${breadType} to make Sandwich.`);
	cb();
}
function TakeBread(breadType, cb) {
	setTimeout(() => {
		console.log(`${breadType} bread taken`);
		cb();
	}, 2000);
}
function cutBread(slice, cb) {
	setTimeout(() => {
		console.log(`Bread cut into ${slice} slices`);
		cb();
	}, 3000);
}
function applySauce(sauce, cb) {
	setTimeout(() => {
		console.log(`Sauce applied: ${sauce}`);
		cb();
	}, 4000);
}
function filling(paneer, cb) {
	setTimeout(() => {
		console.log(`Filling done with ${paneer}`);
		cb();
	}, 5000);
}
function grill(temp, cb) {
	setTimeout(() => {
		console.log(`Sandwich grilled at ${temp} degrees`);
		cb();
	}, 6000);
}
function serve(cb) {
	setTimeout(() => {
		console.log('Sandwich Served');
		cb();
	}, 7000);
}

makeSandwich('Brown', () => {
	TakeBread('Brown', () => {
		cutBread(2, () => {
			applySauce('Mayo', () => {
				filling('Paneer', () => {
					grill(350, () => {
						serve(() => {
							console.log('Tasty Sandwich made');
						});
					});
				});
			});
		});
	});
});


////To solve the problem of Callback(function passed to another function as an argument)
//// POD -> we shifted to Promises (Attachment of .then() to the function which is returning promise)
//  -> Async/Await (syntactic sugar over promises)
