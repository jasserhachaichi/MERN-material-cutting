import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Statistic() {
  const [stats, setStats] = useState({
    clientCount: 0,
    orderCount: 0,
    ongoingOrders: 0,
    completedOrders: 0,
    canceledOrders: 0,
    totalRevenue: 0,
    totalShapes: 0,
    availableShapes: 0,
    totalMaterials: 0,
    availableMaterials: 0,
    totalMaterialTypes: 0,
    availableMaterialTypes: 0,
    totalEdges: 0,
    availableEdges: 0,
    totalAngles: 0,
    availableAngles: 0,
  });

  useEffect(() => {
    async function fetchStatistics() {
      try {
        const response = await axios.get('http://localhost:4000/statistics/', { withCredentials: true });
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
        alert('Failed to fetch statistics. Please try again later.');
      }
    }
    fetchStatistics();
  }, []);

  return (<>

    <div className="py-5">

          <div className='row'>
            <h2>Statistics</h2>
          </div>

          <div className="row">

            <div className="col-md-4 mb-3">
              <div className="card  shadow-sm">
                <div className="card-body d-flex align-items">
                  <i className="ki-duotone ki-rocket fs-1"><span className="path1"></span><span className="path2"></span></i>
                  <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                    Number of customers: {stats.clientCount}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div href="#" className="card  shadow-sm ">
                <div className="card-body d-flex align-items">
                  <i className="ki-duotone ki-timer fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span></i>
                  <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                    Number of orders: {stats.orderCount}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div href="#" className="card  shadow-sm ">
                <div className="card-body d-flex align-items">
                  <i className="ki-duotone ki-bucket fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                  <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                    Number of orders in progress: {stats.ongoingOrders}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div href="#" className="card  shadow-sm ">
                <div className="card-body d-flex align-items">
                  <i className="ki-duotone ki-bucket fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                  <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                    Number of completed orders: {stats.completedOrders}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div href="#" className="card  shadow-sm ">
                <div className="card-body d-flex align-items">
                  <i className="ki-duotone ki-bucket fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                  <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                    Number of cancelled orders: {stats.canceledOrders}
                  </span>
                </div>
              </div>
            </div>


            <div className="col-md-4 mb-3">
              <div href="#" className="card  shadow-sm ">
                <div className="card-body d-flex align-items">
                  <i className="ki-duotone ki-bucket fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                  <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                    Total number of shapes: {stats.totalShapes}
                  </span>
                </div>
              </div>
            </div>


            <div className="col-md-4 mb-3">
              <div href="#" className="card  shadow-sm ">
                <div className="card-body d-flex align-items">
                  <i className="ki-duotone ki-bucket fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                  <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                    Number of shapes available: {stats.availableShapes}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div href="#" className="card  shadow-sm ">
                <div className="card-body d-flex align-items">
                  <i className="ki-duotone ki-bucket fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                  <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                    Total number of materials: {stats.totalMaterials}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div href="#" className="card  shadow-sm ">
                <div className="card-body d-flex align-items">
                  <i className="ki-duotone ki-bucket fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                  <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                    Number of materials available: {stats.availableMaterials}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div href="#" className="card  shadow-sm ">
                <div className="card-body d-flex align-items">
                  <i className="ki-duotone ki-bucket fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                  <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                    Total number of material types: {stats.totalMaterialTypes}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div href="#" className="card  shadow-sm ">
                <div className="card-body d-flex align-items">
                  <i className="ki-duotone ki-bucket fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                  <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                    Total number of edges: {stats.totalEdges}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div href="#" className="card  shadow-sm ">
                <div className="card-body d-flex align-items">
                  <i className="ki-duotone ki-bucket fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                  <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                    Nombre des edges disponibles: {stats.availableEdges}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div href="#" className="card  shadow-sm ">
                <div className="card-body d-flex align-items">
                  <i className="ki-duotone ki-bucket fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                  <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                    Total number of angles: {stats.totalAngles}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div href="#" className="card  shadow-sm ">
                <div className="card-body d-flex align-items">
                  <i className="ki-duotone ki-bucket fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                  <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                    Number of available angles: {stats.availableAngles}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
            <div href="#" className="card  shadow-sm ">
              <div className="card-body d-flex align-items">
                <i className="ki-duotone ki-bucket fs-1"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                  Number of material types available: {stats.availableMaterialTypes}
                </span>
              </div>
            </div>
          </div>

          </div>

    </div>
  </>
  );
}

export default Statistic;
