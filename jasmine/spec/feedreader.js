$(function() {
    describe('RSS Feeds', function() {
    
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Wrote a test that loops through each feed
        it('has defined URLs', function(){
            for(const feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            }
        });

        //Wrote a test that ensured that names are defined and aren't empty
        it('has a defined name', function(){
            for(const feeds of allFeeds){
                expect(feeds.name.length).toBeGreaterThan(0);
                expect(feeds.name).toBeDefined();
            }
        });
    });


    describe('The menu', function(){

        //Wrote a test that ensured that the menu element is hidden by default
        it('has a hidden menu bar', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         //Wrote a test that checks if menu toggle (show and hide) is working properly
        it('should toggle displaying the menu', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    
    describe('Initial Entries', function() {

        //this test checks to see if there is at least one entry posted
        beforeEach(function(done) {
            loadFeed(0, function(){
                done();
            });
        });
        it('should have at least one entry', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();

        });
    
    });

    describe('New Feed Selection', function() {
        //ensures that the feed is actually loaded
        var container;

        beforeEach(function(done) {
            loadFeed(0, function() {
                container = $('.feed').html();
                loadFeed(1, done);
            });
        });

        it('should change content when the feed is loaded', function(done) {
            var containerAfter = $('.feed').html();
            expect(container).not.toBe(containerAfter);
            done();
        });
    });
       
}());
