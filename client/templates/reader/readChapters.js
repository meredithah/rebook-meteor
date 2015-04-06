Template.readChapters.helpers({
    mainTrack: function(){
        return _.where(this.contents, {track: 0})
    },

    resource: function(){
        return Resources.findOne({_id: this.resource_id});
    },

    isText: function(){
        return this.type == "text";
    },

    paras: function(text){
        if (text){
            var paras = text.split(/(?:\s*\r\n|\s*\n|\s*\r){2,}/gm);
            paras = _.map(paras, function(p){
                return {
                    text: p,
                    length: p.split(/\s+/).length
                }
            });
            _.reduce(paras, function(sum,cur){
                    var cumsum = sum + cur.length;
                    cur.end = cumsum;
                    return cumsum;
                },0)
                ;
            return paras;
        }
    }
});