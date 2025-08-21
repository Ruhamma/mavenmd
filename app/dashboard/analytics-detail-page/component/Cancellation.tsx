import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { IconUserX, IconCalendarCancel, IconRepeat, IconCircleX } from '@tabler/icons-react';

export default function CancellationModal() {
  return (
    <div className="space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Who missed appointments */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <h3 className="font-semibold text-lg">Who missed my appointments</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconUserX className="text-red-600" size={20} />
                <span>Patient no shows</span>
              </div>
              <span className="font-medium">70%</span>
            </div>
            <Progress value={70} className="h-2" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconCalendarCancel className="text-blue-600" size={20} />
                <span>I had to Cancel (3 appointments)</span>
              </div>
              <span className="font-medium">30%</span>
            </div>
            <Progress value={30} className="h-2" />
          </CardContent>
        </Card>

        {/* What happened after */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <h3 className="font-semibold text-lg">What Happened After?</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconRepeat className="text-orange-500" size={20} />
                <span>Rescheduled with Me</span>
              </div>
              <span className="font-medium">12 patients</span>
            </div>
            <Progress value={75} className="h-2" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconCircleX className="text-red-500" size={20} />
                <span>Lost to Follow up</span>
              </div>
              <span className="font-medium">4 patients</span>
            </div>
            <Progress value={25} className="h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Impact on Practice */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <h3 className="font-semibold text-lg">Impact on Practice</h3>
          <div className="space-y-2">
            <div className="p-3 rounded-md bg-red-50 text-red-700">
              <span className="font-medium">Patient Care Continuity</span>
              <p className="text-sm">4 chronic patients missed follow ups</p>
            </div>
            <div className="p-3 rounded-md bg-yellow-50 text-yellow-700">
              <span className="font-medium">Schedule Efficiency</span>
              <p className="text-sm">16 empty slots that could have helped other patients</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bad Reviews */}
      <Card>
        <CardContent className="p-4 space-y-4">
          <h3 className="font-semibold text-lg">Bad reviews</h3>
          <p className="text-sm text-gray-500">
            Patients who left a bad review because of cancellation
          </p>

          {/* Review 1 */}
          <div className="border rounded-lg p-4 space-y-2">
            <p className="italic text-gray-700">
              “I truly appreciated your compassion and professional attitude. They made me feel
              comfortable throughout my experience.”
            </p>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Frank Esteban</span>
              <div className="flex gap-1 text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="border rounded-lg p-4 space-y-2">
            <p className="italic text-gray-700">
              “I truly appreciated your compassion and professional attitude. They made me feel
              comfortable throughout my experience.”
            </p>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Frank Esteban</span>
              <div className="flex gap-1 text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
