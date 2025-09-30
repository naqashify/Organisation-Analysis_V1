// Alumni Dashboard Application
class AlumniDashboard {
    constructor() {
        this.data = {
            batch_analysis: {
                b15_total: 43,
                b16_total: 44,
                both_batches: 9,
                b15_only: 34,
                b16_only: 35,
                total_unique_organizations: 80
            },
            organization_lists: {
                b15_organizations: ["Open Links Foundation", "Sampark", "FutureWorks", "4th Wheel Foundation", "TNS Foundation", "Lighthouse Community", "Manjhi", "Muheem", "Kotak Education Foundation", "Agastya International Foundation", "Tender Heart Org", "Convergence Foundation", "Anubhuti", "Dhwani Foundation", "CEGP", "LAHI", "Mystics Manzil", "Project Chirag", "United Way - Mumbai", "Haqdarshak", "Ant Org", "Antarang", "Akanksha", "Samanta Foundation", "ThinkTac", "Youth Dreamers Foundation", "Vidhyadhara", "Aveti Pvt. Learning Ltd.", "Youth for Social Development", "Udhyam Learning Foundation", "Indus Action", "Pratham", "Green Hub", "Tisser", "Lakshya Jeevan Jagriti", "Anudip Foundation", "Piramal Pharma Limited", "IPEL Project - Consultant (ECE Fellow)", "Vijayavahini Charitable Foundation (Supported by Tata Trusts)", "CHIRAG (Central Himalayan Rural Action Group)", "Arogya World - Program Manager - Healthy School Program", "Prayatna – NGO - Programme Officer", "Piramal Foundation"],
                b16_organizations: ["Piramal Pharma Limited", "Azim Premji Foundation", "Open Links Foundation", "Labhya", "Bharti Airtel Foundation", "Swades Foundation", "Room to Read", "iTeach Schools", "FWWB", "Sterlite EDIndia Foundation", "CHIRAG", "The Circle", "Water for People", "Reap Benefits", "Central Square Foundation", "Safe Hub", "ThinkTac", "Kotak Education Foundation", "Antarang Foundation", "LAHI", "Parisar Bhagini Vikas Sangha", "Indus Action", "Medha Foundation", "People's Forum", "Apnishala", "SOUL", "BAIF", "SankalpTaru Foundation", "Ritinjali", "Sattva", "Antara Foundation", "Piramal Foundation", "Sajhe Sapane", "SRI", "K.R Shroff Foundation", "Quality Council of India", "The Right Pitch", "Filo - Ed Tech", "iVolunteer", "i-Saksham", "IIT - IIT", "ILSS", "LIFE Lab (Learning is Fun & Experiential)", "Foundation for Ecological Security (FES)"],
                organizations_in_both_batches: ["Piramal Pharma Limited", "Open Links Foundation", "CHIRAG", "ThinkTac", "Kotak Education Foundation", "Antarang", "Indus Action", "Piramal Foundation", "LAHI"],
                b15_only_organizations: ["Sampark", "FutureWorks", "4th Wheel Foundation", "TNS Foundation", "Lighthouse Community", "Manjhi", "Muheem", "Agastya International Foundation", "Tender Heart Org", "Convergence Foundation", "Anubhuti", "Dhwani Foundation", "CEGP", "Mystics Manzil", "Project Chirag", "United Way - Mumbai", "Haqdarshak", "Ant Org", "Akanksha", "Samanta Foundation", "Youth Dreamers Foundation", "Vidhyadhara", "Aveti Pvt. Learning Ltd.", "Youth for Social Development", "Udhyam Learning Foundation", "Pratham", "Green Hub", "Tisser", "Lakshya Jeevan Jagriti", "Anudip Foundation", "IPEL Project - Consultant (ECE Fellow)", "Vijayavahini Charitable Foundation (Supported by Tata Trusts)", "Arogya World - Program Manager - Healthy School Program", "Prayatna – NGO - Programme Officer"],
                b16_only_organizations: ["Azim Premji Foundation", "Labhya", "Bharti Airtel Foundation", "Swades Foundation", "Room to Read", "iTeach Schools", "FWWB", "Sterlite EDIndia Foundation", "The Circle", "Water for People", "Reap Benefits", "Central Square Foundation", "Safe Hub", "Parisar Bhagini Vikas Sangha", "Medha Foundation", "People's Forum", "Apnishala", "SOUL", "BAIF", "SankalpTaru Foundation", "Ritinjali", "Sattva", "Antara Foundation", "Sajhe Sapne", "SRI", "K.R Shroff Foundation", "Quality Council of India", "The Right Pitch", "Filo - Ed Tech", "iVolunteer", "i-Saksham", "IIT - IIT", "ILSS", "LIFE Lab (Learning is Fun & Experiential)", "Foundation for Ecological Security (FES)"]
            },
            recruitment_performance: {
                "Piramal Pharma Limited": {"B15": 3, "B16": 4, "total": 7},
                "Open Links Foundation": {"B15": 5, "B16": 16, "total": 21},
                "Piramal Foundation": {"B15": 84, "B16": 13, "total": 97}
            },
            domain_analysis: {
                working_domains: {
                    "Education": 22,
                    "Consulting, Leadership & Others": 7,
                    "Livelihood": 6,
                    "Environment": 5,
                    "Gender/Women Empowerment": 3,
                    "Rural & Tribal Development": 3,
                    "Health": 2
                },
                domain_focus_distribution: {
                    single_domain_organizations: 23,
                    multi_domain_organizations: 21,
                    single_domain_percentage: 52.3,
                    multi_domain_percentage: 47.7
                }
            },
            geographic_analysis: {
                state_wise_jd_coverage: {
                    "Maharashtra (Mumbai, Pune etc)": 12,
                    "Uttar Pradesh": 7,
                    "Delhi": 7,
                    "Karnataka, Telangana & Andhra Pradesh": 7,
                    "Chattisgarh": 5,
                    "Gujarat": 5,
                    "Uttrakhand": 4,
                    "Rajasthan": 3,
                    "Kolkata, Assam, NE": 3,
                    "Odisha": 3,
                    "Multiple States": 3,
                    "Madhya Pradesh": 2,
                    "Haryana": 2,
                    "Jharkhand": 2,
                    "Himachal Pradesh": 2,
                    "Punjab": 1,
                    "Goa": 1
                }
            },
            unique_job_description_analysis: {
                unique_job_description_types: {
                    "Operations Type": 56,
                    "Alternate Roles Type": 19,
                    "Center of Excellence (CoE) Type": 17,
                    "Field Operations Type": 7,
                    "Special Interest Group (SIG) Type": 4
                },
                job_level_distribution: {
                    "Entry Level (Associate, Assistant, Coordinator)": 93,
                    "Mid Level (Manager, Lead, Senior)": 10
                },
                salary_range_distribution: {
                    "Between 4-6 LPA": 67,
                    "Up to 4 LPA": 21,
                    "6 LPA and above": 15
                },
                total_unique_job_descriptions: 103
            }
        };

        this.charts = {};
        this.chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];
        this.neonColors = ['#00bcd4', '#4ecdc4', '#a855f7', '#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeNavigation();
        this.animateCounters();
        this.createCharts();
        this.renderOrganizationLists();
    }

    setupEventListeners() {
        // Mobile menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenuClose = document.getElementById('mobileMenuClose');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        const sidebar = document.getElementById('sidebar');

        mobileMenuBtn?.addEventListener('click', () => {
            sidebar.classList.add('open');
            mobileMenuOverlay.classList.add('active');
        });

        mobileMenuClose?.addEventListener('click', () => this.closeMobileMenu());
        mobileMenuOverlay?.addEventListener('click', () => this.closeMobileMenu());

        // Global search
        const globalSearch = document.getElementById('globalSearch');
        globalSearch?.addEventListener('input', (e) => this.handleGlobalSearch(e.target.value));

        // Export button
        const exportBtn = document.getElementById('exportBtn');
        exportBtn?.addEventListener('click', () => this.exportData());

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle?.addEventListener('click', () => this.toggleTheme());

        // Window resize
        window.addEventListener('resize', () => this.handleResize());
    }

    closeMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        sidebar.classList.remove('open');
        mobileMenuOverlay.classList.remove('active');
    }

    initializeNavigation() {
        const navLinks = document.querySelectorAll('.sidebar-link');
        const sections = document.querySelectorAll('.content-section');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = link.dataset.section;
                
                // Update active nav
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Update active section
                sections.forEach(s => s.classList.remove('active'));
                document.getElementById(targetSection)?.classList.add('active');
                
                // Close mobile menu if open
                this.closeMobileMenu();
            });
        });
    }

    animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 30);
        });
    }

    getChartOptions(title = '') {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff',
                        padding: 20,
                        font: {
                            family: 'Inter',
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: '#00bcd4',
                    bodyColor: '#ffffff',
                    borderColor: '#00bcd4',
                    borderWidth: 1,
                    cornerRadius: 8,
                    padding: 12,
                    font: {
                        family: 'Inter'
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#b0b0b0',
                        font: {
                            family: 'Inter',
                            size: 11
                        }
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#b0b0b0',
                        font: {
                            family: 'Inter',
                            size: 11
                        }
                    }
                }
            }
        };
    }

    createCharts() {
        this.createOrgDistributionChart();
        this.createBatchComparisonChart();
        this.createDomainChart();
        this.createDomainFocusChart();
        this.createStateChart();
        this.createTopStatesChart();
        this.createJobTypesChart();
        this.createJobLevelChart();
        this.createSalaryChart();
        this.createRecruitmentChart();
        this.createBatchRecruitmentChart();
    }

    createOrgDistributionChart() {
        const ctx = document.getElementById('orgDistributionChart');
        if (!ctx) return;

        this.charts.orgDistribution = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['B15 Only', 'B16 Only', 'Both Batches'],
                datasets: [{
                    data: [
                        this.data.batch_analysis.b15_only,
                        this.data.batch_analysis.b16_only,
                        this.data.batch_analysis.both_batches
                    ],
                    backgroundColor: ['#00bcd4', '#4ecdc4', '#a855f7'],
                    borderColor: '#1a1a1a',
                    borderWidth: 2
                }]
            },
            options: {
                ...this.getChartOptions(),
                cutout: '60%'
            }
        });
    }

    createBatchComparisonChart() {
        const ctx = document.getElementById('batchComparisonChart');
        if (!ctx) return;

        this.charts.batchComparison = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['B15 Total', 'B16 Total', 'Shared Orgs'],
                datasets: [{
                    label: 'Organizations',
                    data: [
                        this.data.batch_analysis.b15_total,
                        this.data.batch_analysis.b16_total,
                        this.data.batch_analysis.both_batches
                    ],
                    backgroundColor: ['#00bcd4', '#4ecdc4', '#a855f7'],
                    borderColor: '#1a1a1a',
                    borderWidth: 1
                }]
            },
            options: {
                ...this.getChartOptions(),
                plugins: {
                    ...this.getChartOptions().plugins,
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    createDomainChart() {
        const ctx = document.getElementById('domainChart');
        if (!ctx) return;

        const domains = this.data.domain_analysis.working_domains;

        this.charts.domain = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(domains),
                datasets: [{
                    data: Object.values(domains),
                    backgroundColor: this.neonColors,
                    borderColor: '#1a1a1a',
                    borderWidth: 2
                }]
            },
            options: {
                ...this.getChartOptions(),
                cutout: '50%'
            }
        });
    }

    createDomainFocusChart() {
        const ctx = document.getElementById('domainFocusChart');
        if (!ctx) return;

        const focusData = this.data.domain_analysis.domain_focus_distribution;

        this.charts.domainFocus = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Single Domain Organizations', 'Multi-Domain Organizations'],
                datasets: [{
                    data: [
                        focusData.single_domain_organizations,
                        focusData.multi_domain_organizations
                    ],
                    backgroundColor: ['#22c55e', '#f59e0b'],
                    borderColor: '#1a1a1a',
                    borderWidth: 2
                }]
            },
            options: this.getChartOptions()
        });
    }

    createStateChart() {
        const ctx = document.getElementById('stateChart');
        if (!ctx) return;

        const stateData = this.data.geographic_analysis.state_wise_jd_coverage;
        const sortedStates = Object.entries(stateData).sort(([,a], [,b]) => b - a);

        this.charts.state = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: sortedStates.map(([state]) => state.length > 15 ? state.substring(0, 15) + '...' : state),
                datasets: [{
                    label: 'Job Descriptions',
                    data: sortedStates.map(([,count]) => count),
                    backgroundColor: this.neonColors[0],
                    borderColor: this.neonColors[1],
                    borderWidth: 1
                }]
            },
            options: {
                ...this.getChartOptions(),
                indexAxis: 'y',
                plugins: {
                    ...this.getChartOptions().plugins,
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    createTopStatesChart() {
        const ctx = document.getElementById('topStatesChart');
        if (!ctx) return;

        const stateData = this.data.geographic_analysis.state_wise_jd_coverage;
        const topStates = Object.entries(stateData)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 8);

        this.charts.topStates = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: topStates.map(([state]) => state.length > 15 ? state.substring(0, 15) + '...' : state),
                datasets: [{
                    data: topStates.map(([,count]) => count),
                    backgroundColor: this.neonColors,
                    borderColor: '#1a1a1a',
                    borderWidth: 2
                }]
            },
            options: {
                ...this.getChartOptions(),
                cutout: '50%'
            }
        });
    }

    createJobTypesChart() {
        const ctx = document.getElementById('jobTypesChart');
        if (!ctx) return;

        const jobTypes = this.data.unique_job_description_analysis.unique_job_description_types;

        this.charts.jobTypes = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(jobTypes),
                datasets: [{
                    data: Object.values(jobTypes),
                    backgroundColor: this.chartColors.slice(0, 5),
                    borderColor: '#1a1a1a',
                    borderWidth: 2
                }]
            },
            options: {
                ...this.getChartOptions(),
                cutout: '50%'
            }
        });
    }

    createJobLevelChart() {
        const ctx = document.getElementById('jobLevelChart');
        if (!ctx) return;

        const jobLevels = this.data.unique_job_description_analysis.job_level_distribution;

        this.charts.jobLevel = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(jobLevels),
                datasets: [{
                    data: Object.values(jobLevels),
                    backgroundColor: ['#00bcd4', '#a855f7'],
                    borderColor: '#1a1a1a',
                    borderWidth: 2
                }]
            },
            options: this.getChartOptions()
        });
    }

    createSalaryChart() {
        const ctx = document.getElementById('salaryChart');
        if (!ctx) return;

        const salaryData = this.data.unique_job_description_analysis.salary_range_distribution;

        this.charts.salary = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(salaryData),
                datasets: [{
                    label: 'Number of Positions',
                    data: Object.values(salaryData),
                    backgroundColor: ['#22c55e', '#f59e0b', '#ef4444'],
                    borderColor: '#1a1a1a',
                    borderWidth: 1
                }]
            },
            options: {
                ...this.getChartOptions(),
                plugins: {
                    ...this.getChartOptions().plugins,
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    createRecruitmentChart() {
        const ctx = document.getElementById('recruitmentChart');
        if (!ctx) return;

        const organizations = Object.keys(this.data.recruitment_performance);
        const totalData = organizations.map(org => this.data.recruitment_performance[org].total);

        this.charts.recruitment = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: organizations.map(org => org.length > 20 ? org.substring(0, 20) + '...' : org),
                datasets: [{
                    label: 'Total Recruits',
                    data: totalData,
                    backgroundColor: '#00bcd4',
                    borderColor: '#4ecdc4',
                    borderWidth: 1
                }]
            },
            options: {
                ...this.getChartOptions(),
                plugins: {
                    ...this.getChartOptions().plugins,
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    createBatchRecruitmentChart() {
        const ctx = document.getElementById('batchRecruitmentChart');
        if (!ctx) return;

        const organizations = Object.keys(this.data.recruitment_performance);
        const b15Data = organizations.map(org => this.data.recruitment_performance[org].B15);
        const b16Data = organizations.map(org => this.data.recruitment_performance[org].B16);

        this.charts.batchRecruitment = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: organizations.map(org => org.length > 20 ? org.substring(0, 20) + '...' : org),
                datasets: [
                    {
                        label: 'B15 Recruits',
                        data: b15Data,
                        backgroundColor: '#00bcd4',
                        borderColor: '#4ecdc4',
                        borderWidth: 1
                    },
                    {
                        label: 'B16 Recruits',
                        data: b16Data,
                        backgroundColor: '#a855f7',
                        borderColor: '#22c55e',
                        borderWidth: 1
                    }
                ]
            },
            options: this.getChartOptions()
        });
    }

    renderOrganizationLists() {
        // Render B15 organizations
        const b15Container = document.getElementById('b15Organizations');
        if (b15Container) {
            b15Container.innerHTML = this.data.organization_lists.b15_organizations
                .map(org => `<div class="org-item">${org}</div>`)
                .join('');
        }

        // Render B16 organizations
        const b16Container = document.getElementById('b16Organizations');
        if (b16Container) {
            b16Container.innerHTML = this.data.organization_lists.b16_organizations
                .map(org => `<div class="org-item">${org}</div>`)
                .join('');
        }

        // Render organizations in both batches
        const bothContainer = document.getElementById('bothBatchesOrgs');
        if (bothContainer) {
            bothContainer.innerHTML = this.data.organization_lists.organizations_in_both_batches
                .map(org => `<div class="org-item">${org}</div>`)
                .join('');
        }
    }

    handleGlobalSearch(query) {
        if (!query.trim()) {
            // Reset all organization items
            document.querySelectorAll('.org-item').forEach(item => {
                item.style.display = 'block';
            });
            return;
        }

        const searchTerm = query.toLowerCase();
        document.querySelectorAll('.org-item').forEach(item => {
            const orgName = item.textContent.toLowerCase();
            if (orgName.includes(searchTerm)) {
                item.style.display = 'block';
                item.style.backgroundColor = 'rgba(0, 188, 212, 0.1)';
            } else {
                item.style.display = 'none';
            }
        });
    }

    exportData() {
        const exportData = {
            summary: {
                b15Organizations: this.data.batch_analysis.b15_total,
                b16Organizations: this.data.batch_analysis.b16_total,
                organizationsInBothBatches: this.data.batch_analysis.both_batches,
                b15OnlyOrganizations: this.data.batch_analysis.b15_only,
                b16OnlyOrganizations: this.data.batch_analysis.b16_only,
                totalUniqueOrganizations: this.data.batch_analysis.total_unique_organizations
            },
            organizationLists: this.data.organization_lists,
            domainAnalysis: this.data.domain_analysis,
            geographicAnalysis: this.data.geographic_analysis,
            jobDescriptionAnalysis: this.data.unique_job_description_analysis,
            recruitmentPerformance: this.data.recruitment_performance,
            timestamp: new Date().toISOString()
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `alumni-dashboard-export-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    toggleTheme() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-color-scheme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-color-scheme', newTheme);
        
        // Update theme toggle button
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
        }
        
        // Recreate charts with new theme
        setTimeout(() => {
            this.destroyCharts();
            this.createCharts();
        }, 100);
    }

    destroyCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart) chart.destroy();
        });
        this.charts = {};
    }

    handleResize() {
        // Redraw charts on resize
        Object.values(this.charts).forEach(chart => {
            if (chart) chart.resize();
        });
    }
}

// Initialize dashboard when DOM is loaded
let dashboard;
document.addEventListener('DOMContentLoaded', () => {
    dashboard = new AlumniDashboard();
});

// Handle window resize
window.addEventListener('resize', () => {
    if (dashboard) {
        dashboard.handleResize();
    }
});