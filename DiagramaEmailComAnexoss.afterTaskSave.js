function afterTaskSave(colleagueId, nextSequenceId, userList) {
    var WKNumState = getValue("WKNumState");
    var WKNumProces = getValue("WKNumProces") + "";
    var attachments = hAPI.listAttachments();
    var attach = new Array();

    if (WKNumState == 3) {
        var numeroSolic = getValue("WKNumProces") + "";
        //var estabelecimento = hAPI.getCardValue("unidadeFilial");
        var pageService = fluigAPI.getPageService().getServerURL();
        var linkSolic = pageService + "/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=" + WKNumProces
        var parametros = new java.util.HashMap();
        var template = '';

        parametros.put("numSolic", numeroSolic);
        if (attachments.size() > 0) {
            verifySendEmail(attach, numeroSolic, linkSolic);
            //verifySendEmail(attach, numeroSolic, estabelecimento, linkSolic);
        }
    }
}

function verifySendEmail(attach, numeroSolic, linkSolic) {
    try {
        var emails = new java.util.ArrayList();
        var subject = "Assunto do E-mail";

        //emails.add(hAPI.getCardValue("Destinatario"));
        //emails.add("gustavo.paiva@ez4.com.br");

        var body = ''
        var cc = [];
        var bccString = hAPI.getCardValue("Destinatario");
        var bcc = bccString.split(';');
        var anexos = hAPI.listAttachments();
        for (var i = 0; i < anexos.size(); i++) {
            var attachment = anexos.get(i);
            // if (attachment.getDocumentType() != "7") { //caso vc queira fazer tratativas referentes ao "tipo" do anexo...
            //     continue;
            // }
            attach.push(attachment);
        }
        var x = numeroSolic;
        var y = linkSolic;
	        sendMail(subject, body, emails, cc, bcc, attach, x, y);
    } catch (e) {
    	
        log.info(e.message + " / Linha: " + e.lineNumber);
        var mensagem = "Mensagem: " + (!isEmpty(e.message)) ? e.message : e.toString();
        if (!isEmpty(e.lineNumber)) {
            mensagem += " | Linha: " + e.lineNumber;
        }
        throw "FALHA: " + mensagem
    }

    return true;
}

function isEmpty(value) {
    if (value == undefined || value == null || value == "") {
        return true;
    }
    return false;
}

function sendMail(assunto, conteudo, email, cc, bcc, attach, variavel0, variavel1) {

    var docService = fluigAPI.getDocumentService();
    var username = "3a5f811964e693";
    var password = "d54f7921a10f28"; 
    var mailsender = "ffb3223388-6230f0@inbox.mailtrap.io"
    var host = "sandbox.smtp.mailtrap.io";
    var port = "587";
    var tmpHtml = org.jsoup.Jsoup.parse(bodyEmail(variavel0, variavel1));
    var props = new java.util.Properties();

    props.put("mail.debug", "true");
    props.put("mail.transport.protocol", "smtp");
    props.put("mail.host", host);
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.port", port);
    props.put("mail.smtp.starttls.enable", "true");
    var session = javax.mail.Session.getInstance(props, null);
    session.setDebug(true);
    var message = new javax.mail.internet.MimeMessage(session);
    var messageBodyPart = new javax.mail.internet.MimeBodyPart();
    var multipart = new javax.mail.internet.MimeMultipart("mixed");
    var transport = session.getTransport("smtp");
    var emailx = email;
    log.dir(emailx);

    message.setFrom(new javax.mail.internet.InternetAddress(mailsender));
    for (j = 0; j < email.size(); j++) {
        message.addRecipient(
            javax.mail.Message.RecipientType.TO,
            new javax.mail.internet.InternetAddress(email.get(j))
        );
        log.dir(message.getAllRecipients());
    }
    message.setSubject(assunto);

    if (cc && cc.length) {
        for (var i in cc) {
            message.addRecipient(
                javax.mail.Message.RecipientType.CC,
                new javax.mail.internet.InternetAddress(cc[i])
            );
        }
    }
    
    if (bcc && bcc.length) {
        for (var i in bcc) {
            message.addRecipient(
                javax.mail.Message.RecipientType.BCC,
                new javax.mail.internet.InternetAddress(bcc[i])
            );
        }
    }

    for (var j = 0; j < attach.length; j++) {
        var anexoId = attach[j].getDocumentId();
        var anexoDesc = attach[j].getDocumentDescription();
        var publicUrl = docService.getDownloadURL(parseInt(anexoId));
        // var attachs = new Array();
        var attachment = new javax.mail.internet.MimeBodyPart();

        attachment.setDataHandler(new javax.activation.DataHandler(new java.net.URL(publicUrl)));
        attachment.setDisposition(javax.mail.internet.MimeBodyPart.ATTACHMENT);
        attachment.setFileName(anexoDesc);

        multipart.addBodyPart(attachment);

        // adicionaAnexo(multipart, id, versao, nomeArquivo, descArquivo);
    }

    messageBodyPart.setContent(tmpHtml.toString(), "text/html;charset=utf-8");
    multipart.addBodyPart(messageBodyPart);
    message.setContent(multipart, "text/html; charset=utf-8");
    transport.connect(host, username, password);
    transport.sendMessage(message, message.getAllRecipients())

    return true
}

function bodyEmail(numSolic, linkSolic) {

    var corpoEmail = ""; //HTML DO EMAIL
    return corpoEmail;
}

function adicionaAnexo(multipart, id, versao, nomeArquivo, descArquivo) { //Inutilizada
    try {
        var dirDefault = fluigAPI.getTenantService().getTenantData(["dirDefault"]).get("dirDefault");
        var arquivo = new java.io.File(dirDefault + "\\public\\" + id + "\\" + versao + "\\" + nomeArquivo);
        var attachment = new javax.mail.internet.MimeBodyPart();
        attachment.setDataHandler(new javax.activation.DataHandler(new javax.activation.FileDataSource(arquivo)));
        attachment.setDisposition(javax.mail.internet.MimeBodyPart.ATTACHMENT);
        attachment.setFileName(descArquivo ? descArquivo : nomeArquivo);
        multipart.addBodyPart(attachment);
    } catch (err) {
        throw ("function " + arguments.callee.name + " => " + err.toString());
    }
}