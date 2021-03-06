Template.menu.events({
    "click .resources": function(event, template){
        Session.set('previewArea', 'resourceList');
        Session.set('previewData', {
            pageTitle: 'Resources',
            collection: 'Resources'
        });
    },
    "click .chapters": function(event, template){
        Session.set('previewArea', 'resourceList');
        Session.set('previewData', {
            pageTitle: 'Chapters',
            collection: 'Chapters'
        });
    },
    "click .sequences": function(event, template){
        Session.set('previewArea', 'resourceList');
        Session.set('previewData', {
            pageTitle: 'Sequences',
            collection: 'Sequences'
        });
    },
    "click .collections": function(event, template){
        Session.set('previewArea', 'resourceList');
        Session.set('previewData', {
            pageTitle: 'Collections',
            collection: 'Collections'
        });
    },
    "click .book": function(event, template){
        Session.set('workArea', 'bookBuild');
        Session.set('workData', "sNeQAtid4hJxoPrRH");
    }
});
