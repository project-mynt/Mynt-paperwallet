ninja.wallets.singlewallet = {
	open: function () {
		if (document.getElementById("myntaddress").innerHTML == "") {
			ninja.wallets.singlewallet.generateNewAddressAndKey();
		}
		document.getElementById("walletCommands").style.display = "block";
		document.getElementById("keyarea").style.display = "block";
		document.getElementById("currencyddl").style.display = "block";
		document.getElementById("singlearea").style.display = "block";
		document.getElementById("initBanner").style.display = "none";
	},

	close: function () {
		document.getElementById("singlearea").style.display = "none";
	},

	// generate mynt address and private key and update information in the HTML
	generateNewAddressAndKey: function () {
		try {
			var key = new Mynt.ECKey(false);
			var myntAddress = key.getMyntAddress();
			var privateKeyWif = key.getMyntWalletImportFormat();
			document.getElementById("myntaddress").innerHTML = myntAddress;
			document.getElementById("myntprivwif").innerHTML = privateKeyWif;
			var keyValuePair = {
				"qrcode_public": myntAddress,
				"qrcode_private": privateKeyWif
			};
			ninja.qrCode.showQrCode(keyValuePair, 4);
		}
		catch (e) {
			// browser does not have sufficient JavaScript support to generate a mynt address
			alert(e);
			document.getElementById("myntaddress").innerHTML = "error";
			document.getElementById("myntprivwif").innerHTML = "error";
			document.getElementById("qrcode_public").innerHTML = "";
			document.getElementById("qrcode_private").innerHTML = "";
		}
	}
};
