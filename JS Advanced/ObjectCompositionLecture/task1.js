

function solve(data) {

    const rectProto = {
        area() {
            return this.width * this.height;
        },
        compareTo(otherRec) {
            const currentRecArea = this.area();
            const otherArea = otherRec.area();

            return currentRecArea - otherArea || this.width - otherRec.width;
            
            
        }
    };
    function createRect(width,height) {
        const rect = Object.create(rectProto);
        rect.width = width;
        rect.height = height;
        return rect;

    }
    return data.reduce(function(acc,currItem) {
        const [width,height] = currItem;
        const obj = createRect(width,height);
        return acc.concat(obj);
    },[]).sort((a,b) => a.compareTo(b));
}