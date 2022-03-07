let projects = []

function addProject() {
    let title = document.getElementById("project-name").value;
    let start = document.getElementById("start-date") .value;
    let end = document.getElementById("end-date").value;
    let desc = document.getElementById("description").value;
    let image = document.getElementById("input-project-image").files [0];

    if (title == '' || start == '' || end == '' || desc == '' || image == ''){
        return alert ( 'All input fields must be not empty');
    }

    image = URL.createObjectURL(image);

    let startFull = new Date(start);
    let endFull = new Date(end);

    let project = {
        title: title,
        start: startFull,
        end: endFull,
        desc: desc,
        image: image,       
    }

    projects.push(project)

    renderProject()

}

function renderProject() {

    let projectContainer = document.getElementById('contents')

    projectContainer.innerHTML =  
    ` <div class="project-list" id="contents">
    <div class="project-list-item"> 
    <div class="project-image">
        <img src="asset/mobileapp.jpeg" alt="mobileapp" />
    </div>
    <div class="project-content">
        <h3>
        <a href="project-detail.html" target="_blank"
        >Dumbways Mobile App -2021</a>
        </h3>
    </div>    
    <div class="detail-project-content">
        <h5>durasi : 3 bulan
        </h5>
        <p>App that used for dumbways student, it was deployed and can downloaded on playstore. Happy download 
        </p>
    </div>    
    <div class="project-technologies">
    <div>
        <img src="asset/playstore.png">
        <img src="asset/android.png">
        <img src="asset/java.png">
    </div>
    <div class="btn-group">
        <button class="btn-edit">edit</button>
        <button class="btn-delete">delete</button>
    </div>
    </div> `

    for (let i = 0; i < projects.length;
        i++)  {

        projectContainer.innerHTML = 
        ` <div class="project-list" id="contents"> 
        <div id="${i}class="project-list-item">
            <div class="project-image">
                <img src="${projects[i].image}" alt="mobileapp" />
            </div>
            <div class="project-content">
                <h3>
                    <a href="project-detail.html" target="_blank"
                    >${projects[i].title}</a>
                </h3>
            </div>    
            <div class="detail-project-content">
                <h5>durasi : ${getTimeDistance(projects[i].end, projects[i].start)}
                </h5>
                <p>"${projects[i].desc} 
                </p>
            </div>    
            <div class="project-technologies">
            <div>
                <img src="asset/playstore.png">
                <img src="asset/android.png">
                <img src="asset/java.png">
            </div>
            <div class="btn-group">
                <button class="btn-edit" >edit</button>
                <button class="btn-delete">delete</button>
            </div>
        </div>

        </div>   
    `}


}

function getTimeDistance(start, end) {


    let distance = end - start
    
    let yearDistance = Math.floor(distance / (12 * 4 * 7 * 24 * 60 * 60 * 1000))
    if (yearDistance != 0) {
    return `${yearDistance} year`
    } else {
        let monthDistance = Math.floor(distance / (4 * 7 * 24 * 60 * 60 * 1000))
        if (monthDistance !=0) {
        return `${monthDistance} month`
        } else {
            let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
            if (weekDistance !=0) {
            return `${weekDistance} week`
            } else {
                let dayDistance =
                Math.floor(distance / (24 * 60 * 60 * 1000))
                if (dayDistance !=0) {
                return `${dayDistance} day`
                }
            }
        }
    }

}