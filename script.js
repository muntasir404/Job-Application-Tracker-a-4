const allJobs = [
    {
        id: 1,
        company: "Mobile First Corp",
        role: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: null
    }, {
        id: 2,
        company: "WebFlow Agency",
        role: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$80,000 - $120,000",
        desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: null
    },  {
        id: 3,
        company: "DataViz Solutions",
        role: "Data Visualization Specialist",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$95,000 - $130,000",
        desc: "Transform complex data into compelling visualizations. Expert-level skills in D3.js, React, and strong analytics thinking.",
        status: null
    },
    {
        id: 4,
        company: "CloudFirst Inc",
        role: "DevOps Engineer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$130,000 - $170,000",
        desc: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: null
    },
    {
        id: 5,
        company: "Innovate Labs",
        role: "Full Stack Engineer",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$110,000 - $150,000",
        desc: "Drive innovation and build new features for our suite of products. Strong design sense and frontend development expertise required.",
        status: null
    },{
        id: 6,
        company: "MegaCorp Industries",
        role: "JavaScript Developer",
        location: "Chicago, IL",
        type: "Full-time",
        salary: "$90,000 - $120,000",
        desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation and professional development opportunities.",
        status: null
    },
    {
        id: 7,
        company: "StartupXYZ",
        role: "React Native Developer",
        location: "Miami, FL",
        type: "Contract",
        salary: "$70/hour - $90/hour",
        desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        status: null
    },
    {
        id: 8,
        company: "TechCorp Industries",
        role: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$140,000 - $180,000",
        desc: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript.",
        status: null
    }
];
let jobs = [...allJobs];
let currentTab = 'all';
document.addEventListener('DOMContentLoaded', function() {
    showJobs();
    updateStats();
});
function switchTab(tab) {
    currentTab = tab;
    
    document.querySelectorAll('.tab').forEach(function(btn) {
        btn.classList.remove('active');
    });
    document.getElementById('tab-' + tab).classList.add('active');
    
    showJobs();
}
function updateStats() {
    var total = jobs.length;
    var interview = 0;
    var rejected = 0;
    
    for (var i = 0; i < jobs.length; i++) {
        if (jobs[i].status === 'interview') interview++;
        if (jobs[i].status === 'rejected') rejected++;
    }
    
    document.getElementById('totalCount').textContent = total;
    document.getElementById('interviewCount').textContent = interview;
    document.getElementById('rejectedCount').textContent = rejected;
}function getStatusTag(status) {
    if (status === 'interview') {
        return '<span class="status-tag interview">Interview</span>';
    } else if (status === 'rejected') {
        return '<span class="status-tag rejected">Rejected</span>';
    } else {
        return '<span class="status-tag not-applied">Not Applied</span>';
    }
}function showJobs() {
    var list = document.getElementById('jobsList');
    list.innerHTML = '';
    
    var filtered = jobs;
    if (currentTab === 'interview') {
        filtered = jobs.filter(function(j) { return j.status === 'interview'; });
    } else if (currentTab === 'rejected') {
        filtered = jobs.filter(function(j) { return j.status === 'rejected'; });
    }
    
    document.getElementById('jobsCount').textContent = filtered.length + ' jobs';
    
    if (filtered.length === 0) {
        if (currentTab === 'interview' || currentTab === 'rejected') {
            showEmptyWithImage(list);
        } else {
            showEmptySimple(list);}
        return;
    }
    for (var i = 0; i < filtered.length; i++) {
        list.appendChild(createCard(filtered[i]));
    }
}

function showEmptyWithImage(container) {
    container.innerHTML = 
        '<div class="empty-state">' +
            '<img src="assets/jobs.png" class="empty-img" alt="No jobs" onerror="this.style.display=\'none\'">' +
            '<p class="empty-title">No jobs available</p>' +
            '<p class="empty-text">Check back soon for new job opportunities</p>' +
        '</div>';
}

function showEmptySimple(container) {
    container.innerHTML = 
        '<div class="empty-state">' +
            '<p class="empty-title">No jobs available</p>' +
            '<p class="empty-text">Check back soon for new job opportunities</p>' +
        '</div>';
}

function createCard(job) {
    var div = document.createElement('div');
    var statusClass = job.status || 'none';
    div.className = 'job-card ' + statusClass; 
    var isInterview = job.status === 'interview';
    var isRejected = job.status === 'rejected';
    
    div.innerHTML = 
        '<button class="delete-btn" onclick="deleteJob(' + job.id + ')" title="Delete">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                '<path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>' +
            '</svg>' +
        '</button>' +
        '<div class="company">' + job.company + '</div>' +
        '<div class="role">' + job.role + '</div>' +
        '<div class="details">' + job.location + ' • ' + job.type + ' • ' + job.salary + '</div>' +
        getStatusTag(job.status) +
        '<div class="desc">' + job.desc + '</div>' +
        '<div class="actions">' +
            '<button class="btn btn-interview ' + (isInterview ? 'active' : '') + '" onclick="setStatus(' + job.id + ', \'interview\')">Interview</button>' +
            '<button class="btn btn-rejected ' + (isRejected ? 'active' : '') + '" onclick="setStatus(' + job.id + ', \'rejected\')">Rejected</button>' +
        '</div>';
    return div;
}

function setStatus(id, status) {
    var job = jobs.find(function(j) { return j.id === id; });
    if (!job) return;
    if (job.status === status) {
        job.status = null;
    } else {
        job.status = status;
    }
    updateStats();
    showJobs();
}
function deleteJob(id) {
    if (!confirm('Delete this job?')) return;
    jobs = jobs.filter(function(j) { return j.id !== id; });
    updateStats();
    showJobs();
}