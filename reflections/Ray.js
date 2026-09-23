class Ray{
    constructor(x, y){
        this.pos = createVector(x, y)
        this.vel = createVector(1, 0)

        this.points = [this.pos.copy()]
    }

    update(){
        this.pos.add(this.vel)
        this.points.push(this.pos.copy())
    }

    render(){
        beginShape()
        for (let p of this.points){
            vertex(p.x, p.y)
        }
        endShape()
    }
}