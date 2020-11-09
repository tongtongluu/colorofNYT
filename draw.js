const pos_x = [100, 130, 160, 190, 220, 250, 280, 310, 340, 370, 400, 430, 460, 490, 520, 550, 580, 610, 640, 670, 700, 730, 760, 790, 820, 850, 880, 910, 940, 970]
const pos_y = [25, 150, 275, 400, 525, 650, 775, 900, 1025, 1150]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']

function drawInitial() {
    var svg = d3.select('body')
        .append('svg')
        .attr('height', 1400)
        .attr('width', 1080)

    var node = svg.selectAll('.rect')
        .data(pos_x)
        .enter()
        .append('g')
        .classed('rect', true)

    pos_y.forEach(function(dy, iy) {
        node.append('image')
            .attr('width', 20)
            .attr('height', 20)
            .attr('x', function(d) { return d })
            .attr('y', dy - 25)
            .attr('xlink:href', 'sample.png')
            .attr('id', function(d) { return 'img' + dy + d })

        node.append('rect')
            .attr('width', 15)
            .attr('height', 25)
            .attr('x', function(d) { return d })
            .attr('y', dy)
            .attr('fill', 'red')
            .attr('id', function(d) { return 'rect' + dy + d + 'top' })

        node.append('rect')
            .attr('width', 15)
            .attr('height', 25)
            .attr('x', function(d) { return d })
            .attr('y', dy + 25)
            .attr('fill', 'blue')
            .attr('id', function(d) { return 'rect' + dy + d + 'mid' })

        node.append('rect')
            .attr('width', 15)
            .attr('height', 25)
            .attr('x', function(d) { return d })
            .attr('y', dy + 50)
            .attr('fill', 'green')
            .attr('id', function(d) { return 'rect' + dy + d + 'bot' })

        svg.append("text")
            .text(months[iy])
            .style("stroke", "black")
            .attr("dy", "1em")
            .attr('x', 0)
            .attr('y', dy + 25)
    })

}

drawInitial()