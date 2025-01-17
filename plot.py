import matplotlib.pyplot as plt
import numpy as np

def calculate_mean_time(file_path):
    try:
        with open(file_path) as f:
            measurements = f.readlines()
        measurements = [int(x.strip()) for x in measurements[1:]]
        return sum(measurements) / len(measurements)
    except FileNotFoundError:
        print(f"File {file_path} not found.")
        return 0

mean_did_time = []
mean_verification_time = []
mean_extraction_time = []
mean_pdp_time = []
files = [4, 8, 16, 32, 64]

for file in files:
    extraction_file_path = f'measurements/{file}/extraction.txt'
    mean_extraction_time.append(calculate_mean_time(extraction_file_path))

    verification_file_path = f'measurements/{file}/verification.txt'
    mean_verification_time.append(calculate_mean_time(verification_file_path))

    pdp_file_path = f'measurements/{file}/pdp.txt'
    mean_pdp_time.append(calculate_mean_time(pdp_file_path))

    did_file_path = f'measurements/{file}/did.txt'
    mean_did_time.append(calculate_mean_time(did_file_path))

labels = ['4', '8', '16', '32', '64']
x = np.arange(len(labels))
# Calculate total time
total_time = np.array(mean_did_time) + np.array(mean_verification_time) + np.array(mean_extraction_time) + np.array(mean_pdp_time)

# Plot bars
bars1 = plt.bar(x, mean_did_time, label='DID resolution')
bars2 = plt.bar(x, mean_verification_time, bottom=mean_did_time, label='verification')
bars3 = plt.bar(x, mean_extraction_time, bottom=np.array(mean_did_time) + np.array(mean_verification_time), label='attributes extraction')
bars4 = plt.bar(x, mean_pdp_time, bottom=np.array(mean_did_time) + np.array(mean_verification_time) + np.array(mean_extraction_time), label='PDP')

# Function to add labels
def add_labels(bars):
    for bar in bars:
        height = bar.get_height()
        plt.text(bar.get_x() + bar.get_width() / 2, bar.get_y() + height / 2,
                 '{0:.0%}'.format(height / total_time[int(bar.get_x())]),
                 ha='center', va='center')

# Add labels to each section
add_labels(bars1)
add_labels(bars2)
add_labels(bars3)
add_labels(bars4)

plt.xlabel('Number of attributes per VP')
plt.ylabel('Mean time (ms)')
plt.xticks(x, labels)
plt.legend()

plt.savefig('figures/chart.png')

plt.clf()

# draw a pie chart for every number of attributes
for file in files:
    extraction_file_path = f'measurements/{file}/extraction.txt'
    mean_extraction_time = calculate_mean_time(extraction_file_path)

    verification_file_path = f'measurements/{file}/verification.txt'
    mean_verification_time = calculate_mean_time(verification_file_path)

    pdp_file_path = f'measurements/{file}/pdp.txt'
    mean_pdp_time = calculate_mean_time(pdp_file_path)

    did_file_path = f'measurements/{file}/did.txt'
    mean_did_time = calculate_mean_time(did_file_path)
    print("mean_did_time for ", file, " is ", mean_did_time)

    labels = ['DID resolution', 'verification', 'attributes extraction', 'PDP']
    sizes = [mean_did_time, mean_verification_time, mean_extraction_time, mean_pdp_time]
    percentages = [s/sum(sizes)*100 for s in sizes]
    legend_labels = ['{0} - {1:1.1f} %'.format(i,j) for i,j in zip(labels, percentages)]
    plt.pie(sizes, startangle=90)
    plt.legend( legend_labels, bbox_to_anchor=(-0.40, 1),loc='upper left')
    plt.savefig(f'figures/pie-{file}.png')
    plt.clf()

# multiple credentials

mean_did_time = []
mean_verification_time = []
mean_extraction_time = []
mean_pdp_time = []
files = [1, 2, 4]

for file in files:
    extraction_file_path = f'measurements/multi/{file}/extraction.txt'
    mean_extraction_time.append(calculate_mean_time(extraction_file_path))

    verification_file_path = f'measurements/multi/{file}/verification.txt'
    mean_verification_time.append(calculate_mean_time(verification_file_path))

    pdp_file_path = f'measurements/multi/{file}/pdp.txt'
    mean_pdp_time.append(calculate_mean_time(pdp_file_path))

    did_file_path = f'measurements/multi/{file}/did.txt'
    mean_did_time.append(calculate_mean_time(did_file_path))

labels = ['1', '2', '4' ]
x = np.arange(len(labels))
plt.bar(x, mean_did_time, label='DID resolution')
plt.bar(x, mean_verification_time, bottom=mean_did_time, label='verification')
plt.bar(x, mean_extraction_time, bottom=np.array(mean_did_time) + np.array(mean_verification_time), label='attributes extraction')
plt.bar(x, mean_pdp_time, bottom=np.array(mean_did_time) + np.array(mean_verification_time) + np.array(mean_extraction_time), label='PDP')
plt.xlabel('Number of VCs')
plt.ylabel('Mean time (ms)')
plt.xticks(x, labels)
plt.legend()

plt.savefig('figures/chart-multiple-credentials.png')

plt.clf()