    (function(d, m){
        var kommunicateSettings = {"appId":"your_appid","popupWidget":true,"automaticChatOpenOnNavigation":true,
        "labels": {
          'emoji.hover.text': {
            'poor': 'Mala',
            'great': 'Buena',
            'average': 'Regular'
        },
          'start.new': 'Iniciar nueva conversación',
          'conversation.header.dropdown': {
            'CSAT_RATING_TEXT': 'Califica esta conversación'
        },
        'lead.collection': {
          'title': 'Formulario ',
          'submit': 'Iniciar Conversación',
      },
          'csat.rating': {
            'CONVERSATION_RATED': 'Tu calificación es:',
            'RATE_CONVERSATION': 'Califica tu conversación',
            'CONVERSATION_REVIEW_PLACEHOLDER': 'Escribe un comentario',
            'OTHER_QUERIES': '¿Tienes otra pregunta? ',
            'RESTART_CONVERSATION': 'Restablecer conversación',
            'SUBMIT_RATING' : 'Envía tu calificación'
        },
        'online': 'En línea',
        'offline': 'Desconectado',
        'input.message': 'Escribe tu mensaje...',
        'conversations.title': 'Conversaciones',
        'typing': 'escribiendo...',
        'is.typing': 'está escribiendo',
        'waiting.queue.message': {
          'contact.name': 'En Espera...',
          'header.text': 'En espera...',
          'first.Part': 'A la brevedad te atenderemos, eres el',
          'last.part': ' en la lista de atención.'
      }
      },
        "onInit": function() {
          let css = "#mck-submit-comment{background: #defb09 !important;color: black !important;border: 2px solid #7ddf6c !important;width: 80%;border-radius: 30px; font-weight: bold;}.km-csat-skeleton .mck-conversation-comment{font-weight: bold;}#mck-msg-new{background-color: #defb09 !important;border: 2px solid #7ddf6c !important;color: black !important;}.km-modal input, .km-modal select, .km-modal textarea{border-radius: 50px;}.km-start-conversation{color: black !important; border-color: #7ddf6c !important;}.km-custom-widget-stroke {stroke: black !important;fill: white !important;}.km-cta-multi-button-container button.km-cta-button {font-size: 14px;border: 3px solid #000;background-color: #7ddf6c;color: black !important;} .mck-msg-left .mck-msg-box a {color: #2fdaca !important;text-decoration: underline;}.mck-msg-left .mck-msg-box a:hover {color: #da3f2f !important;}.km-sidemodal--modal-header{background-color: #DEFB09!important;color: black!important;}.mck-msg-left .mck-msg-box{background-color: black!important;color:#DEFB09!important;}.mck-msg-right .mck-msg-box{background-color: black!important;}.km-cta-multi-button-container button.km-quick-replies{font-weight: bold;border: 3px solid #defb09 !important;border-top-color: rgb(0, 0, 0);border-right-color: rgb(0, 0, 0);border-bottom-color: rgb(0, 0, 0);border-left-color: rgb(0, 0, 0);background-color: #7ddf6c;color: black !important;}.mck-msg-list-icon{fill: black;}.mck-sidebox .mck-box-title{color: black!important;}.mck-tab-title{color: black!important;}.mck-agent-status-text{color: black!important;}.mck-box-top {background-color: #DEFB09!important;color: black!important;}.mck-msg-left .mck-msg-box{background-color: black!important;color:#DEFB09!important;}.mck-msg-right .mck-msg-box{background-color: black!important;color:white!important;}";
          
          window.Kommunicate.customizeWidgetCss(css);
        }};
        
        var s = document.createElement("script"); 
        s.type = "text/javascript"; 
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; 
        h.appendChild(s);
        window.kommunicate = m; 
        m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

    setTimeout(()=>{ this.active = true; }, 3000);
